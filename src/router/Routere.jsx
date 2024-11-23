
import {Route , createBrowserRouter , createRoutesFromElements} from 'react-router'
import Layout from '../components/Layout/Layout'
const router = createBrowserRouter(
  createRoutesFromElements(
    
   <>
   <Route path='/'
   element={<div><Layout /></div>}
   >
   <Route index element={<div>Home</div>}/>
   <Route path='about' element={<div>about</div>}/>
   </Route>
   </>
  )
)
export default router