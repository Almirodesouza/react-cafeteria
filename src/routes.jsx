import {createBrowserRouter} from 'react-router-dom';
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Avaliacao from './Pages/Avaliações'
import Endereco from './Pages/Endereço'

const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />,
    },

    {
        path: '/menu',
        element: <Menu />,
    },
    {
        path: '/avaliacao',
        element: <Avaliacao />,
    },
    {
        path: '/endereco',
        element: <Endereco />,
    }
]);

export default router;