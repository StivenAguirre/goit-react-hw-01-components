import React, {Fragment} from 'react'
import styles from "../css/stadistic.module.css"
import { generarColorAleatorio } from 'index'
import jsonData from "../data.json"

function Stadistics() {
  const data = jsonData
  return (
    <Fragment>
    <h2>2- Sección de estadística</h2>
    <section className={styles.statistics}>
      <div className={styles.container}>
      <h2 className={styles.upload}>UPLOAD STATS</h2>
      <ul className={styles['stat-list']}>
        {data.map(item => (
          <li style={{backgroundColor : generarColorAleatorio(),
          height: "120px",
        width: "120px",
        borderRadius: "2px",
        textAlign: "center",
        display: "grid",
        placeItems: "center"
      }
          } key={item.id}>
          <span className={styles.label}>{item.label}</span><br />
          <span className={styles.percentage}>{item.percentage}</span>
        </li>
        ))}
      </ul>
      </div>
    </section>
    </Fragment>
  )
}
export default Stadistics
