import React  from 'react'
import styles from './note.module.css'
import trash from './svg/Trash-2.svg'

export default function Note({ text, id }) {

  const delBtn = () => {
    localStorage.removeItem(id)
    window.location.reload(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        {/* <button className={styles.btn}>Edit</button> */}
        <button className={styles.delbtn}><img src={trash} alt='del' onClick={delBtn}></img></button>
      </div>
      <p className={styles.text}>
        {text}
      </p>

    </div>
  )
}
