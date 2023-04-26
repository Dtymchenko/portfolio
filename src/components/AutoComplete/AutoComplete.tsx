import React, { ReactNodeArray } from 'react';
import styles from './AutoComplete.module.scss';
import axios from 'axios';
import reactStringReplace from 'react-string-replace';
import Input from './Input/Input';
import Item from './Item/Item';
import { IUser } from './../../interface';
import { USERS_API } from '../../API';

const AutoComplete = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [items, setItems] = React.useState<IUser[]>([]);
  const [matchItems, setMatchItems] = React.useState<IUser[]>([]);

  const light = React.useCallback((filter: string, str: string) => {
    if (filter.trim()) {
      const arr: any = filter?.split(' ');

      return arr?.reduce((acc: ReactNodeArray, el: string) => {
        acc = reactStringReplace(
          acc,
          new RegExp(`(${el})`, 'gi'),
          (match, index, offset) => {
            if (match) {
              return (
                <span
                  key={`${match}-${index}-${offset}`}
                  style={{ backgroundColor: 'yellow' }}
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
  }, []);

  const findMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length) {
      const matches = items.filter((item) =>
        JSON.stringify(item)
          .replace(
            /\"geo\":\{\"lat\":\"-?\d+.?\d*\",\"lng\":\"-?\d*.?\d*\"\}/gi,
            ''
          )
          .replace(/\"id\":\d,\"name\":*/gi, '')
          .replace(/\"username\"/gi, '')
          .replace(/\"email\"/gi, '')
          .replace(/\"address\"/gi, '')
          .replace(/\"street\"/gi, '')
          .replace(/\"suite\"/gi, '')
          .replace(/\"city\"/gi, '')
          .replace(/\"zipcode\"/gi, '')
          .replace(/,/gi, '')
          .replace(/\"phone\".*/gi, '')
          .toUpperCase()
          .includes(e.target.value.toUpperCase())
      );
      setMatchItems(matches);
    } else {
      setMatchItems(items);
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    findMatch(e);
  };

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(USERS_API);
        setItems(response.data);
        setMatchItems(response.data);
      } catch (err) {
        alert(err);
        console.log(err);
      } finally {
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Input inputValue={inputValue} onChangeInput={onChangeInput} />
      <div className={styles.items}>
        {matchItems.map((el, i) => (
          <Item
            item={el}
            key={i}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setMatchItems={setMatchItems}
            light={light}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoComplete;
