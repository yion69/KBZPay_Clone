import './App.css'

import Navbar from './components/Navbar'
import HomepageDeskop from './components/HomepageDesktop'
import Homepage from './components/Homepage'
import {Footer} from './components/Footer'

import LifePage from './components/LifePage'
import MessagePage from './components/MessagePage'

import Scan from './components/features/Scan'
import Receive from './components/features/Receieve'
import CashIn from './components/features/CashIn'
import CashOut from './components/features/CashOut'

import Profile from './components/Profile'

// import Test from './components/test'
import { Routes, Route } from 'react-router-dom'

function App() {
  console.log(window.screen.width);
  return (
    <>
      <Navbar />
      <Routes>
        {  window.screen.width < 768 ?
          <Route path='/' element={ <Homepage /> }/> 
          :
          <Route path= '/' element={ <HomepageDeskop /> } />
        }
        <Route path='/LifePage' element={ <LifePage /> } />
        <Route path='/Messages' element={ <MessagePage /> } />
        <Route path='/Profile' element={ <Profile /> }/>
       <Route path='/Scan' element={ <Scan /> } />
        <Route path='/Receive' element={ <Receive username='UserOne' phone_number='095190175' /> } />
        <Route path='/CashIn' element={ <CashIn /> } />
        <Route path='/CashOut' element={ <CashOut /> } />
      </Routes>
      {window.screen.width < 550 && (<Footer />)}
    </>
  )
}

export default App
