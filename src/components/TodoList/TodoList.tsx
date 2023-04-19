import React from 'react'
import styles from './TodoList.module.scss'
import { useTodos } from '../../zustand/store'
import Form from './Form/Form'
import List from './List/List'

const TodoList = () => {

  const addOpen = useTodos((state) => state.addOpen);

  return (
    <div className={styles.wrapper}>
      {addOpen && <Form />}
      <List />
    </div>
  )
}

export default TodoList
