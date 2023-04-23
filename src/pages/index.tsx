import React from 'react'
import Style from '../styles/Home.module.css'
import Link from 'next/link'


const index = () => {
  return (
    <div>
      <div className={Style.topbar}>
        <Link href="/login" className={Style.link}>Login</Link>
        <Link href="/register" className={Style.link}>Register</Link>
      </div>
    </div>
  )
}

export default index