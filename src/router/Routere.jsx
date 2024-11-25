
import {Route , createBrowserRouter , createRoutesFromElements} from 'react-router'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
const router = createBrowserRouter(
  createRoutesFromElements(
    
   <>
   <Route path='/'
   element={<div><Layout /></div>}
   >
   <Route index element={<Home />}/>
   <Route path='about' element={<div></div>}/>
   </Route>
   </>
  )
)
export default router