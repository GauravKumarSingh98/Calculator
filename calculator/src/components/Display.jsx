import React from 'react'
import styles from "./AppOuterDesign.module.css";

export default function Display({displayValue}) {
  return (
    <>
    <input className={styles.display} type='text' value={displayValue} readOnly />
    </>
  )
}
