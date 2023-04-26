import styles from './Card.module.scss';
import React, { FC } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { setBasketItems } from '../../../redux/slices/webShopSlice';
import { IWebShopItem } from './../../../interface';
import { WEBSHOP_API } from '../../../API';

const Card: FC<IWebShopItem> = ({ id, title, imageURL, price }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.webShop.isLoading);
  const basketItems = useAppSelector((state) => state.webShop.basketItems);
  const email = useAppSelector((state) => state.main.email);

  const onAddToBasket = (obj: IWebShopItem) => {
    if (email) {
      if (!basketItems.some((item) => item.title === obj.title)) {
        try {
          axios.post(`${WEBSHOP_API}/basket`, obj);
          dispatch(setBasketItems([...basketItems, obj]));
        } catch (err) {
          console.log(err);
          alert(err);
        }
      } else {
        alert('This item is alredy added!');
      }
    }
  };

  const onClickPlus = () => {
    onAddToBasket({ id, title, imageURL, price });
  };

  return (
    <div className={styles.card}>
      <img width={133} height={133} src={imageURL} alt="items"></img>
      <h5>{title}</h5>
      <div className={styles.card_text}>
        <div>
          <div className={styles.card_price}>
            <span>Price:</span>
            <b>{price + ' USD'}</b>
          </div>
        </div>
        {email && (
          <div>
            <button onClick={onClickPlus}>
              <img
                width={20}
                height={20}
                src={
                  basketItems.some((obj) => obj.title === title)
                    ? '/img/done.svg'
                    : '/img/plus.svg'
                }
                alt="plus"
              ></img>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
