import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './index.css'
import PostsPage, {loader as postsLoader }from './pages/PostsPage'
import CreatePostPage, { action as createAction, loader as createLoader} from './pages/CreatePostPage'
import { action as updateAction } from './pages/UpdateAction'
import SinglePostPage, { loader as singlePostLoader} from './pages/SinglePostPage'
import MainPage from './pages/Main'
import { action as deleteAction } from './pages/deleteAction'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    errorElement: <div>Opswwswwsws</div>,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage/>,
        errorElement: <div>Opppssss</div>
      },
      {
        path: 'create',
        action: createAction,
        element: <CreatePostPage/>
      },
      {
        path: 'posts/:postId',
        loader: singlePostLoader,
        element: <SinglePostPage/>
      },
      {
        path: 'posts/:postId/edit',
        loader: createLoader,
        action: updateAction,
        element: <CreatePostPage/>
      },
      {
        path: 'posts/:postId/delete',
        action: deleteAction
      },
      {
        path: 'posts',
        loader: postsLoader,
        element: <PostsPage/>
      },
    ]
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
