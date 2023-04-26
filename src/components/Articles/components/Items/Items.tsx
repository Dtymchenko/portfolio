import styles from './Items.module.scss'
import Item from '../Item/Item'
import Grid from '@mui/material/Grid/Grid';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { IArticle } from '../../../../interface';

function Items() {
    const filteredItems = useAppSelector((state) => state.articles.filteredItems);

    return (
    <div className={styles.root}>
      <Grid className={styles.container} container spacing={3}>
      {filteredItems?.map((item:IArticle) => (
        <Grid className={styles.grid} key={item.id} item xs={4}>
          <Item item={item}/>
        </Grid>
      ))
      }
      </Grid>
    </div>
    )
}



export default Items