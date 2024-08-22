import {createBrowserRouter} from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import TodoCategories from './components/todoComponents/TodoCategories';
import Login from './components/identityComponent/Login';
import Register from './components/identityComponent/Register';
import PrivateRoute from './PrivateRoute';
import Profile from './components/profile/Profile';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <PrivateRoute element={TodoCategories} redirect='/login' />,
            },
            {
                path: '/profile',
                element: <PrivateRoute element={Profile} redirect='/login' />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '*',
                element: <h1>404 Not Found</h1>
            }
        ]
    }
]);

export default AppRouter;