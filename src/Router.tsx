import { Routes, Route } from 'react-router-dom'
import { Home } from './screens/Home'
import { MovieDetails } from './screens/MovieDetails'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie' element={<MovieDetails />} />
    </Routes>
  )
}
