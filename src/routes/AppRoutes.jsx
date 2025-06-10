import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Save from '../pages/Save'
import Account from '../pages/Account'
import Viewmore from '../pages/Viewmore'
import Message from '../pages/Message'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import { Toaster } from 'react-hot-toast';
import NotFound from '../pages/NotFound'
import PrivateRoute from './PrivateRoutes'


function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} /> */}
                <Route path='/home' element={<Home />} />
                <Route path='/save' element={<Save />} />
                <Route path='/account' element={<Account />} />
                <Route path='/view/:id' element={<Viewmore />} />
                <Route path='/message' element={<Message />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/dashboard' element={<Dashboard />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
            <Toaster />
        </>
    )
}

export default AppRoutes