import React from 'react'
import styles from './Item.module.scss'
import { useTodos } from '../../../zustand/store'
import { TodoItem } from '../../../interface'

interface ItemProps {
    item: TodoItem,
  }
  
const Item: React.FC<ItemProps> = ({ item }) => {
    const [checkbox, setCheckbox] = React.useState(item.completed);

    const handleComplete = () => {
      setCheckbox(!checkbox);
    };
  
    const removeTodo = useTodos((state) => state.removeTodo);
  
    return (
      <div className={styles.wrapper}>
        <span className={styles.input}>
          <span className={styles.switch_complete}>Switch completed</span>
          <input checked={checkbox} onChange={handleComplete} type="checkbox" />
        </span>
        <span
          className={checkbox ? `${styles.title_complete}` : `${styles.title}`}
        >
          {item.title}
        </span>
        <span className={styles.input}>
          <button onClick={() => removeTodo(item.id)}>X</button>
          <span className={`${styles.switch_complete} ${styles.switch_remove}`}>
            Remove ToDo
          </span>
        </span>
      </div>
    );
}

export default Item
