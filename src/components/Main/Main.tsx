import styles from './Main.module.scss'
import { Link } from 'react-router-dom'
import PacmanAnimation from '../PacmanAnimation/PacmanAnimation'

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <p>
        <span>Hi there</span>
        <span><img src="/img/greeting.png" alt="greeting" width={30} /></span>
      </p>
      <p>And welcome to my website.</p>
      <p>Probably I applied for some job in your company and you received my CV, where you found link on this website.</p>
      <p>It is made with React JS and Typescript as SPA. State manager Redux ToolKit.</p>
      <p>Navigation between the pages with React Router.</p>
      <p>Getting information from API server with axios.</p>
      <p>Authorization with Google Firebase.</p>
      <p>Authorization works with local storage, so it saves login.</p>
      <p>Also if you forgot password, recover function works (you will receive email).</p>
      <p>Used some animation to make it look more alive, for example you can check hover in footer and Pacman to the right :).</p>
      <p>Don't forget to visit <span>&nbsp;<Link to='/projects'>projects page</Link></span>&nbsp;and check some of my pet-projects.</p>
    </div>
    <PacmanAnimation/>
    </div>
    
  )
}

export default Main
