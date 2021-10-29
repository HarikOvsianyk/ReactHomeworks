import Main from '../Pages/Main';
import Error from '../Pages/Error';
import Competition from '../Pages/Competition';

export const AllRoutes = [
    {path: '/',component: Main},
    {path: '/error',component: Error},
    {path: '/competition/:id',component: Competition},
]