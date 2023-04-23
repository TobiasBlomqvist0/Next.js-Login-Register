import React from 'react'
import Style from '../styles/Home.module.css'

const Formlogin = () => {
  return (
    <div className={Style.formContent}>
        <form action="" className={Style.form}>
            <label className={Style.label}>Name</label>
            <input className={Style.input} type="text"/>
            <label className={Style.label}>Password</label>
            <input className={Style.input} type="password"/>
            <button className={Style.button}>Login</button>
        </form>
    </div>
  )
}

export default Formlogin