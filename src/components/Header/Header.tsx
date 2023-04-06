import React from 'react'
import { Box, Toolbar } from '@mui/material'
import { StyledHeader, StyledTitle } from './Header.styles'
import LightModeIcon from '@mui/icons-material/LightMode'

export const Header = () => {
  return (
    <Box>
      <StyledHeader position="static">
        <Toolbar>
          <LightModeIcon />
          <StyledTitle variant="h6">Weather Application</StyledTitle>
        </Toolbar>
      </StyledHeader>
    </Box>
  )
}
