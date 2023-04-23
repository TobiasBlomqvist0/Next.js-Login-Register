import React from 'react'
import Link from 'next/link'
import Style from '../styles/Home.module.css'
import FormRegister from '../components/FormRegister'

const register = () => {
  return (
    <div className={Style.formContent}>
        <Link href="/" className={Style.link}>Back</Link>
        <FormRegister/>
    </div>
  )
}

export default register