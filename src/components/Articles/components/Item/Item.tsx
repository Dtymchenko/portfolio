import React from 'react';
import styles from './Item.module.scss';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IArticle } from '../../../../interface';
import reactStringReplace from 'react-string-replace';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux-hooks';

interface ItemProps {
  item: IArticle;
}

function Item({ item }: ItemProps) {
  const searchValue = useAppSelector((state) => state.articles.searchValue);
  const summarySliced = item.summary.slice(0, 100);
  const currentUrl = useLocation().pathname;

  const light = React.useCallback(
    (filter: string, str: string): string | React.ReactNodeArray => {
      if (filter.trim()) {
        const arr = filter?.split(' ');

        return arr?.reduce((acc: any, el) => {
          acc = reactStringReplace(
            acc,
            new RegExp(`(${el})`, 'gi'),
            (match: string, index: number, offset: number) => {
              if (match) {
                return (
                  <span
                    key={`${match}-${index}-${offset}`}
                    style={{ backgroundColor: 'yellow', fontSize: 'inherit' }}
                  >
                    {match}
                  </span>
                );
              }
            }
          );
          return acc;
        }, str);
      }
      return str;
    },
    []
  );

  return (
    <Card className={styles.root}>
      <Link to={`${currentUrl}/${item.id}`}>
        <CardActionArea className={styles.content}>
          <CardMedia
            className={styles.media}
            image={item.imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent className={styles.text_content}>
            <Typography className={styles.date}>
              <>
                {<CalendarTodayOutlinedIcon />}
                {new Date(item.publishedAt).toLocaleDateString('en-us', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                {/* I hope, that date could be shown like this, the only difference with figma is that there is no ordinal suffix for the day of the month, 2 characters. Anyway if it is crucial, we can make it with function below:
                function ordinal(n) {
                let s = ["th", "st", "nd", "rd"];
                let v = n % 100;
                return n + (s[(v - 20) % 10] || s[v] || s[0]);
} */}
              </>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={`${styles.headline} ${styles.headline}`}
            >
              <p>{light(searchValue, item.title)}</p>
            </Typography>
            <Typography
              variant="body2"
              className={`${styles.description} ${styles.description}`}
            >
              {light(searchValue, summarySliced)}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={styles.bot_part} disableSpacing={true}>
          <Button className={styles.footer}>Read more</Button>
          <Button className={styles.btn}>
            <ArrowForwardIcon />
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}

export default Item;
