import React from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { ARTICLES_API } from '../../../API';
import {
  setItems,
  setIsLoadingFalse,
  setIsLoadingTrue,
} from '../../../redux/slices/articlesSlice';
import ContentLoader from 'react-content-loader';
import Search from './../components/Search/Search';
import Items from '../components/Items/Items';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.articles.isLoading);
  const loadArr = [...Array(10)];

  React.useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setIsLoadingTrue());
        const response = await axios.get(ARTICLES_API);
        dispatch(setItems(response.data));
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        dispatch(setIsLoadingFalse());
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Search />
      {loading ? (
        loadArr.map((item, i) => (
          <ContentLoader
            key={i}
            speed={2}
            width={350}
            height={600}
            viewBox="0 0 350 600"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="19" y="5" rx="0" ry="0" width="300" height="200" />
            <rect x="19" y="209" rx="0" ry="0" width="300" height="30" />
            <rect x="19" y="255" rx="0" ry="0" width="300" height="150" />
            <rect x="19" y="426" rx="0" ry="0" width="300" height="30" />
          </ContentLoader>
        ))
      ) : (
        <Items />
      )}
    </div>
  );
};

export default MainPage;
