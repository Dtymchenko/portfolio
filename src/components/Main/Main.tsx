import React from 'react'
import styles from './Main.module.scss'

const Main = () => {
  return (
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
      <p>Used some animation to make it look more alive, for example you can check hover in footer.</p>
      <p>Don't forget to visit projects page and check some of my pet-projects</p>
    </div>
  )
}

export default Main
