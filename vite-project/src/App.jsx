import React from 'react'
import { Route ,Routes, useLocation } from 'react-router-dom'
import MovieDetail from './Pages/MovieDetail'
import Movie from './Pages/Movie'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import SeatLayout from './Pages/SeatLayout'
import MyBooking from './Pages/MyBooking'
import Favourites from './Pages/Favourites'
import Home from './Pages/Home'
import{ Toaster } from 'react-hot-toast'
import Layout from './Pages/admin/Layout'
import Dashboard from './Pages/admin/Dashboard'
import AddShows from './Pages/admin/AddShows'
import ListShows from './Pages/admin/ListShows'
import ListBooking from './Pages/admin/ListBooking'

function App(){

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
   <>
<Toaster/>
   {!isAdminRoute && <Navbar/>}
   <Routes>
   
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movie/>}/>
     <Route path="/movie/:id" element={<MovieDetail />} /> 
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route path='/my-booking' element={<MyBooking/>}/>
        <Route path='/Favourites' element={<Favourites/>}/>
                <Route path='/admin/*' element={<Layout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='add-shows'element={<AddShows/>}/>
                <Route path='list-shows'element={<ListShows/>}/>
                  <Route path='list-bookings'element={<ListBooking/>}/>
                </Route>
         
            
   </Routes>
      {!isAdminRoute && <Footer/>}  
   </>
  )
}

export default App;