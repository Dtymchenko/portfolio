import styles from './Button.module.scss';

interface ButtonProps {
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button = ({ setLoad }: ButtonProps) => {
  const handleBtnClick = () => {
    setLoad((prev) => !prev);
  };
  return (
    <div className={styles.btn_wrapper}>
      <button className={styles.generate_btn} onClick={handleBtnClick}>
        Click me to generate random colors, where is unlocked
      </button>
    </div>
  );
};

export default Button;
