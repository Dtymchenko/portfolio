import React from 'react';
import styles from './Article.module.scss';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IArticle } from '../../../../interface';
import { ARTICLES_API } from '../../../../API';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import {
  setIsLoadingFalse,
  setIsLoadingTrue,
} from '../../../../redux/slices/articlesSlice';
import ContentLoader from 'react-content-loader';

function Article() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.articles.isLoading);
  const params = useParams();
  const [item, setItem] = React.useState<IArticle>();

  React.useEffect(() => {
    const getDetail = async () => {
      try {
        dispatch(setIsLoadingTrue());
        const response = await axios.get(`${ARTICLES_API}/${params.id}`);
        setItem(response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        dispatch(setIsLoadingFalse());
      }
    };
    getDetail();
  }, [params.id]);

  return loading ? (
    <ContentLoader
      speed={2}
      width={1080}
      height={600}
      viewBox="0 0 1080 600"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="1080" height="245" />
      <rect x="75" y="195" rx="0" ry="0" width="930" height="240" />
    </ContentLoader>
  ) : (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${item?.imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '150px 75px 0px',
      }}
    >
      <article className={styles.article}>
        <h1 className={styles.headline}>{item?.title}</h1>
        <div className={styles.text}>
          <p className={styles.text_paragraph}>{item?.summary}</p>
          {/* Below you can see more text to check CSS, if you want
                    {items.map(el => (<p>{item.summary}</p>))} */}
        </div>
      </article>
      <Link to={'..'}>
        <div className={styles.link}>
          <span></span>
          Back to homepage
        </div>
      </Link>
    </div>
  );
}
export default Article;
