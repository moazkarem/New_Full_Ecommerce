import { Outlet } from "react-router"


const Layout = () => {
  return (
    <div>
     Root Component
      <Outlet />
    </div>
  )
}

export default Layout