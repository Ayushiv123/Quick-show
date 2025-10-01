import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import Movie from './Pages/Movie'
import MovieDetail from './Pages/MovieDetail'
import SeatLayout from './Pages/SeatLayout'
import MyBooking from './Pages/MyBooking'
import Favourites from './Pages/Favourites'

// Admin Pages
import Layout from './Pages/admin/Layout'
import Dashboard from './Pages/admin/Dashboard'
import AddShows from './Pages/admin/AddShows'
import ListShows from './Pages/admin/ListShows'
import ListBooking from './Pages/admin/ListBooking'

function App() {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />   
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
       <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/favourites" element={<Favourites />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashboard />} />          {/* /admin */}
          <Route path="add-shows" element={<AddShows />} /> {/* /admin/add-shows */}
          <Route path="list-shows" element={<ListShows />} /> {/* /admin/list-shows */}
          <Route path="list-booking" element={<ListBooking />} /> {/* /admin/list-booking */}
        </Route>
      </Routes>
    </>
  )
}

export default App
