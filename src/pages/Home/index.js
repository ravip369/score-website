import React from 'react'
import useStyles from './styles.js'

export default function Home () {
  const classes = useStyles()

  return <div className={classes.home}>Home</div>
}
