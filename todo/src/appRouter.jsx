import {createBrowserRouter} from 'react-router-dom';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <h1>Hello World</h1>
        }]
    }
]);

export default AppRouter;