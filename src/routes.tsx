import {  Routes, Route } from 'react-router'
import App from './App'

function Router() {
  return (
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>

  )
}

export default Router