import './App.css'
import Navbar from './components/Navbar'
import HomepageDeskop from './components/HomepageDesktop'
import Homepage from './components/Homepage'
import MarketPage from './components/MarketPage'
import MessagePage from './components/MessagePage'
import Profile from './components/Profile'
// import Test from './components/test'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        { window.screen.width < 550 ?
          <Route path='/' element={ <Homepage /> }/> 
          :
          <Route path= '/' element={ <HomepageDeskop /> } />
        }
        <Route path='/Market' element={ <MarketPage /> } />
        <Route path='/Messages' element={ <MessagePage /> } />
        <Route path='/Profile' element={ <Profile /> }/>
       
      </Routes>
      <Footer />
    </>
  )
}

export default App
