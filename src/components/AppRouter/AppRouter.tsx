import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from 'constants/routes'
import { MainPage } from 'pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
    </Routes>
  )
}
