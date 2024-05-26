
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import DashBoard from './Pages/DashBoard'

import SignUp from './Pages/SignUp'
import Login from './Components/Login'
import AddProperty from './Components/AddProperty'
import MyProperty from './Components/MyProperty'
import AllProperties from './Components/AllProperties'
import Contact from './Components/Contact'




function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/dashboard/*' element={<DashBoard/>} >
          <Route path='add-properties' element={<AddProperty />}/>
          <Route path='my-properties' element={<MyProperty />} />
          <Route path='find-properties' element={<AllProperties />} />
        </Route>
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </>
  )
}

export default App
