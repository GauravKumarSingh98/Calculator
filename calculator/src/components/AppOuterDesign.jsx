import React from 'react'
import styles from "./AppOuterDesign.module.css";

export default function AppOuterDesign({onButtonClick}) {
    const ButtonNames = ['AC', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '/', '=', '.']
  return (
    <div className={styles.calculator}>
        <div className={styles.buttonsContainer}>
            {ButtonNames.map((buttons) => {
               return ( <button className={styles.button} onClick={() => onButtonClick(buttons)}>{buttons}</button>
            )})}
        </div>
    </div>
  )
}
