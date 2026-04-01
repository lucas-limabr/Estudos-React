import { Route } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import Posts from '../pages/dashboard/Posts'
import Post from '../pages/dashboard/Post'
import Perfil from '../pages/dashboard/Perfil'

export const dashboardRoutes = (
  <Route path='dashboard' element={<DashboardLayout />}>
    <Route index element={<Dashboard />} />
    <Route path='perfil' element={<Perfil />} />
    <Route path='posts' element={<Posts />} />
    <Route path='posts/:id' element={<Post />} />
  </Route>
)
