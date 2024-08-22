import { Outlet } from 'react-router'

function HomeLayout() {
  return (
    <div className='home-layout-container'>
        <Outlet />
    </div>
  )
}

export default HomeLayout

