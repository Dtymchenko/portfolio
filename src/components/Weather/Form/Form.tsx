import React from 'react';
import styles from './Form.module.scss';

interface FormProps {
  setCity: (city: string) => void;
}

const Form: React.FC<FormProps> = ({ setCity }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles.form_wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city"
          type="text"
        />
      </form>
    </div>
  );
};

export default Form;
