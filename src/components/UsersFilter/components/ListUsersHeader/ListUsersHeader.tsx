import styles from './ListUsersHeader.module.scss'

const ListUsersHeader = () => {
  return (
    <ul className={styles.list_user_header}>
      <li>
        id
      </li>
      <li>
        Name Surname      
      </li>
      <li>
        Photo      
      </li>
      <li>
        Age      
      </li>
    </ul>
  )
}

export default ListUsersHeader
