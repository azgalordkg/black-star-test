import React from 'react'
import { AppRouter, Layout } from './components'
import { GlobalStyles } from '@mui/material'

export const App = () => {
  return (
    <Layout>
      <GlobalStyles styles={{ body: { margin: 0 } }} />
      <AppRouter />
    </Layout>
  )
}
