import {createBrowserRouter} from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import TodoCategories from './components/todoComponents/TodoCategories';
import Login from './components/identityComponent/Login';
import Register from './components/identityComponent/Register';
import PrivateRoute from './PrivateRoute';

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
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            }
        ]
    }
]);

export default AppRouter;