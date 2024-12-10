
import {Route , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import About from '../pages/About/About'
import Home from '../pages/Home/Home'
const router = createBrowserRouter(
  createRoutesFromElements(
    
   <>
   <Route path='/'
   element={<div><Layout /></div>}
   >
   <Route index element={<Home />}/>
   <Route path='about' element={<About />}/>
   </Route>
   </>
  )
)
export default router