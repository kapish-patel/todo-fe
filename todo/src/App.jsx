
import { RouterProvider } from 'react-router-dom'
import AppRouter from './approuter'
import './App.css'


function App() {
  return (
    <>
      <div className="app_container">
        <RouterProvider router={AppRouter} />
      </div>
    </>
  )
}

export default App