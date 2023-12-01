import React, { Fragment } from 'react'
import styles from "../css/transactionhistory.module.css"
import transaction from "../transactions.json"

function TransactionHistory() {
  return (
    <Fragment>
        <h2>4 - Historial de transacciones</h2>   
        <div className={styles.container}>
        <table className={styles["transaction-history"]}>
            <thead>
                <tr className={styles.header}>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CURRENCY</th>
                </tr>
            </thead>
            <tbody>
            {transaction.map((item, index) => (
                <tr className={index % 2 === 0 ? styles.elementPar : styles.elementImpar} key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </ Fragment>
  )
}

export default TransactionHistory