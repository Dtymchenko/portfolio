import React, { MouseEventHandler, ReactEventHandler } from 'react';
import styles from './List.module.scss';
import Item from '../Item/Item';
import { useTodos } from '../../../zustand/store';

const List = () => {
  const { todos, addOpen, setAddOpen, fetchTodos, clear } = useTodos(
    (state) => ({
      todos: state.todos,
      addOpen: state.addOpen,
      setAddOpen: state.setAddOpen,
      fetchTodos: state.fetchTodos,
      clear: state.clear,
    })
  );

  const onClickPlus = (e: React.MouseEvent<HTMLElement>) => {
    setAddOpen(!addOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sub_wrapper}>
        <div
          // onClick={closeForm}
          className={!addOpen ? `${styles.list}` : `${styles.list_blur}`}
        >
          {todos?.map((todo) => (
            <Item key={todo.id} item={todo} />
          ))}
        </div>
        <div className={styles.button}>
          <button onClick={onClickPlus}>+</button>
          <span>Add new ToDo</span>
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={fetchTodos} className={styles.fetch}>
          Fetch Todos
        </button>
        <span>Total Todos: {todos.length}</span>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

export default List;
