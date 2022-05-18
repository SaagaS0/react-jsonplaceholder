import {useRoutes, Routes, Route} from 'react-router-dom'
import { Photos } from './pages/Albums'
import { Home } from './pages/Home'
import { PhotoT } from './pages/Photo'



export const RouteList = () => {
    return useRoutes([
        { path:'/', element:<Home />},
        { path:'/album/:id', element: <Photos />},
        { path:'/photo/:id', element: <PhotoT /> }
    ])
}

// <Route path='/albums:id' element={} />
// <Route path='/albums:id' element={<Home />} />

