import styles from './ListUserItem.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { IUserFilter } from '../../../../interface';

interface ListUserItemProps {
  item: IUserFilter;
  index: number;
}

const ListUserItem = ({ item, index }: ListUserItemProps) => {
  const currentUrl = useLocation().pathname;

  return (
    <li className={styles.list_user_item}>
      <Link className={styles.grid} to={`${currentUrl}/${item.id}`}>
        <p>{item.id}</p>
        <p>
          {item.firstName} {item.lastName}
        </p>
        <p>
          <img src={item.image} width={50}></img>
        </p>

        <p>{item.age}</p>
      </Link>
    </li>
  );
};

export default ListUserItem;
