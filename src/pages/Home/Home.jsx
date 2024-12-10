
import BestSeller from './BestSeller/BestSeller'
import Blogs from './Blogs/Blogs'
import Department from './Departments/Department'
import Hero from './Hero/Hero'
import Offers from './Offers/Offers'
import OurDepartments from './OurDepartments/OurDepartments'
import Partners from './Partners/Partners'
import Footer from '../../components/Layout/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <OurDepartments />
        <Partners />
        <BestSeller />
        <Offers />
        <Department />
        <Blogs />
        <Footer />
    </div>
  )
}

export default Home