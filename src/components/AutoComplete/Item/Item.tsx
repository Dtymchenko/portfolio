import styles from './Item.module.scss';
import { IUser } from './../../../interface';

interface ItemProps {
  item: IUser;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setMatchItems: React.Dispatch<React.SetStateAction<IUser[]>>;
  light: any;
}

const Item = ({
  item,
  inputValue,
  setInputValue,
  setMatchItems,
  light,
}: ItemProps) => {
  const address = `${item.address.street}, ${item.address.suite}, ${item.address.city}, PI: ${item.address.zipcode}`;

  const handleClick = () => {
    setInputValue(item.name);
    setMatchItems([]);
  };
  return (
    <div className={styles.item} onClick={handleClick}>
      <p>
        <span className={styles.prefix}>name: </span>
        {light(inputValue, item.name)} <br />
        <span className={styles.prefix}>username: </span>
        {light(inputValue, item.username)} <br />
        <span className={styles.prefix}>email: </span>
        {light(inputValue, item.email)} <br />
        <span className={styles.prefix}>address: </span>
        {light(inputValue, address)}
      </p>
    </div>
  );
};

export default Item;
