import React, { Fragment } from 'react'
import Link from 'next/link'
import Style from '../styles/Home.module.css'
import Formlogin from '../components/Formlogin'

const login = () => {
  return (
    <div className={Style.formContent}>
        <Link href="/" className={Style.link}>Back</Link>
        <Formlogin/>
    </div>
  )
}

export default login