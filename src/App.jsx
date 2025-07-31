

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Layout from './components/Layout'
import NotFound from './components/NotFound'







let routers=createBrowserRouter(
  [
{
    path:'', element:<Layout/> ,children:[
      {index:true ,element:<Home/>},
      {path:'about' ,element:<About/>},
      {path:'portfolio' ,element:<Portfolio/>},
      {path:'contact' ,element:<Contact/>},
      {path:'*' ,element:<NotFound/>}
    ]

}, ]
)

export default function App() {


  return (
    <>

      { <RouterProvider router={routers}></RouterProvider>}

    </>
  )
}
