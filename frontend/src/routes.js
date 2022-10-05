import { createBrowserRouter } from "react-router-dom";
import { NotFount } from "./components/NotFount";
import { Blog } from './components/Blog'
import { Login } from "./components/Login";
import { Post } from "./components/Post";
import { ShowPost } from "./components/ShowPost";
import { Statistic } from "./components/Statistic";

const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <div>Helo world!</div>,
        loader: () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user?.role === 'Admin') {
                window.location.replace('admin');
            } else {
                window.location.replace('/posts');
            }
        }
    },
    {
        path: 'posts',
        element: <Blog />,
        children: [
            {
                path: '',
                element: <Post />
            },
            {
                path: ':id',
                element: <ShowPost />
            }
        ]
    },
    {
        path: '/admin',
        element: <Blog />,
        children: [
            {
                path: '',
                element: <Post />
            },
            {
                path: 'posts/:id',
                element: <ShowPost />
            },
            {
                path: 'statistics',
                element: <Statistic />
            }
        ]
    },
    {
        path: '*',
        element: <NotFount />
    }
]);

const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
    routes.navigate('/login')
}


if (routes.state.location.pathname.includes('admin') && user.role !== 'Admin') {
    window.location.replace('/posts');
}

export default routes;
