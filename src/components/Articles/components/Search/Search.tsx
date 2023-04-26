import React from 'react';
import {
  Typography,
  TextField,
  Box,
  InputAdornment,
  Divider,
} from '@mui/material';
import { IArticle } from '../../../../interface';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import {
  setFilteredItems,
  setSearchValue,
} from '../../../../redux/slices/articlesSlice';

function Search() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.articles.items);
  const searchValue = useAppSelector((state) => state.articles.searchValue);
  const filteredItems = useAppSelector((state) => state.articles.filteredItems);

  // const classes = useStyles();

  const filterItems = React.useCallback(
    (arr: IArticle[], fltr: string) => {
      dispatch(setSearchValue(fltr));
      const result: IArticle[] = [];
      const fltrArr = fltr.split(' ');
      if (fltrArr.length && !!fltrArr[0]) {
        for (let i = 0; i < fltrArr.length; i++) {
          const element = fltrArr[i];
          if (!!element) {
            for (let j = 0; j < arr.length; j++) {
              const element2 = arr[j];
              if (
                element2.title.toUpperCase().includes(element.toUpperCase()) &&
                !result.includes(element2)
              ) {
                result.push(element2);
              } else if (
                element2.summary
                  .toUpperCase()
                  .includes(element.toUpperCase()) &&
                !result.includes(element2)
              ) {
                result.push(element2);
              }
            }
          }
        }
        dispatch(setFilteredItems(result));
      } else {
        dispatch(setFilteredItems(arr));
      }
    },
    [dispatch]
  );

  const onFilterChange = React.useCallback(
    (e: any) => {
      filterItems(items, e.target.value);
    },
    [filterItems, items]
  );

  return (
    <div className={styles.wrapper}>
      <Typography className={styles.text} component="h4">
        Filter by keywords
      </Typography>
      <TextField
        value={searchValue}
        onChange={onFilterChange}
        className={styles.input}
        label="Search..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={styles.search_icon} />
            </InputAdornment>
          ),
        }}
      />
      <Box className={styles.results}>{`Results: ${filteredItems.length}`}</Box>
      <Divider className={styles.divider} />
    </div>
  );
}

export default Search;
