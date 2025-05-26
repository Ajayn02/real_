import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Home from './pages/Home'
import Save from './pages/Save'
import Account from './pages/Account'
import Viewmore from './pages/Viewmore'
import Message from './pages/Message'
import Signup from './pages/Signup'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/save' element={<Save />} />
        <Route path='/account' element={<Account />} />
        <Route path='/view' element={<Viewmore />} />
        <Route path='/message' element={<Message />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
