import React from 'react'
import Style from '../styles/Home.module.css'

const FormRegister = () => {
  return (
    <div className={Style.formContent}>
        <form action="" className={Style.form}>
            <label className={Style.label}>Name</label>
            <input className={Style.input} type="text"/>
            <label className={Style.label}>Email</label>
            <input className={Style.input} type="email"/>
            <label className={Style.label}>Password</label>
            <input className={Style.input} type="password"/>
            <button className={Style.button}>Register</button>
        </form>
    </div>
  )
}

export default FormRegister