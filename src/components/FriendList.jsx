import React, { Fragment } from 'react'
import jsonFriend from "../friends.json"
import styles from "../css/friendsList.module.css"

function FriendList() {
    const data = jsonFriend
  return (
    < Fragment>
        <h2>3 - Lista de amigos</h2>
        <div className={styles.container}>
        <ul className={styles["friend-list"]}>
            {data.map(item => (
                <li className={styles.item} key={item.id}>
                    <span className={`${styles.status} ${
                  item.isOnline ? styles.online : styles.offline
                }`}></span>
                    <img className={styles.avatar} src={item.avatar} alt="User avatar" width="48" />
                    <p className={styles.name}>{item.name}</p>
                </li>
            ))}
        </ul>
        </div>
    </ Fragment>
  )
}

export default FriendList