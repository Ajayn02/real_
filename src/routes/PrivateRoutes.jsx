import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
    const isAuthenticated = sessionStorage.getItem('token')
    return isAuthenticated ? children : <Navigate to={'/login'} replace />
}

export default PrivateRoute