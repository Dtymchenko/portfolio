import React from 'react'
import styles from './Webshop.module.scss'
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import ContentLoader from "react-content-loader";
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setItems, setBasketItems, setIsLoading } from '../../redux/slices/webShopSlice';
import SearchBlock from './SearchBlock/SearchBlock';
import Drawer from './Drawer/Drawer';
import Card from './Card/Card';

const Webshop = () => {

    const dispatch = useAppDispatch();

    const items = useAppSelector((state) => state.webShop.items);
    const basketOpened = useAppSelector((state) => state.webShop.basketOpened);
    const searchValue = useAppSelector((state) => state.webShop.searchValue);
    const isLoading = useAppSelector((state) => state.webShop.isLoading);

    React.useEffect(() => {
        async function fetchData() {
          setIsLoading(true)
          try {
            const itemsResponse = await axios.get(
              "https://6319e5bb8e51a64d2befd040.mockapi.io/items"
            );
            const basketResponse = await axios.get(
              "https://6319e5bb8e51a64d2befd040.mockapi.io/basket"
            );
            dispatch(setItems(itemsResponse.data));
            dispatch(setBasketItems(basketResponse.data));
            dispatch(setIsLoading(false));
          } catch (err) {
            alert("Unable to get items list from server");
            console.log("Unable to get items list from server");
            console.log(err);
          }
        }
        fetchData();
      }, []);

      
      const loadArr = [...Array(15)];

  return (
    <div className={styles.wrapper}>
      {basketOpened && <Drawer />}
      <SearchBlock />
      <div className={styles.card_container}>
        <Routes>
          <Route
            index
            element={
              isLoading
                ? loadArr?.map((el, ind) => <ContentLoader
                key={ind}
                speed={2}
                width={240}
                height={220}
                viewBox="0 0 210 220"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="0" ry="0" width="171" height="160" />
                <rect x="28" y="40" rx="0" ry="0" width="64" height="45" />
                <rect x="0" y="174" rx="0" ry="0" width="171" height="31" />
              </ContentLoader>)
                : items
                    .filter(
                      (item) =>
                        item &&
                        item.title
                          .toUpperCase()
                          .includes(searchValue.toUpperCase())
                    )
                    .map((item) => (
                      <Card
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        imageURL={item.imageURL}
                      />
                    ))
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default Webshop
