import React from 'react'
import NavBar from '../NavBar/NavBar'
import classes from './Layout.module.css'
const Layout = (props) => {
  return (
    <div>
        <NavBar/>
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
  )
}

export default Layout