import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import styles from './Header.styles'

export const Header = () => {
  const classes = styles()

  return (
    <Box>
      <AppBar className={classes.header} position="static">
        <Toolbar className={classes.headerContent}>
          <Typography variant="h6" component="div">
            Weather Application
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
