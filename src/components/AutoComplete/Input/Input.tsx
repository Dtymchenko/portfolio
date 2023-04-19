import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
}

const Input = ({ onChangeInput, inputValue}: InputProps) => {
    return (
      <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={onChangeInput}
          placeholder="enter search"
          />
    )
  }
  
  export default Input