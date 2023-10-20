import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Blogs from './components/Blog/Blogs';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCategory from './components/Admin/CreateCat/CreateCategory';
import Category from './components/Admin/Category/Category';
import User from './components/Admin/User/User';
import CreateBlog from './components/Admin/Blog/CreateBlog';
import MyBlog from './components/Admin/Blog/MyBlog';
import UserDashboard from './components/User/UserDashboard';
import CreateBlogs from './components/User/CreateBlog';
import MyBlogs from './components/User/MyBlogs';


import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import Profile from './components/Profile/Profile';
import { getMyProfile } from './redux/actions/user';

import { ProtectedRoute } from 'protected-route-react'
import Loader from './components/Layout/Loader/Loader';
import About from '../src/components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer/Footer';
function App() {

  const[ loading  , setLoading] = useState(true);
  const { isAuthenticated, user, message, error  } = useSelector(state => state.user);

  const dispatch = useDispatch();

  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    } ,2000)
  } ,[])


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' })
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' })
    }
  }, [dispatch, error, message]);


  useEffect(() => {
    dispatch(getMyProfile())
    .then(()=>{
      setLoading(false)
    }
    )

  }, [dispatch])
  return (
    <Router>
      {
        loading ? (<Loader/>) : (
          <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element ={<About/>}/>
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact' element ={<Contact/>}/>
            <Route path='/login' element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile"  >
                <Login />
              </ProtectedRoute>
            } />
            <Route path='/register' element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile" >
                <Register />
              </ProtectedRoute>
            } />
            <Route path='/profile' element={
              <ProtectedRoute isAuthenticated={isAuthenticated}  >
                <Profile user={user} />
              </ProtectedRoute>} />

              <Route path='/user/dashboard' element={
             <ProtectedRoute isAuthenticated = {isAuthenticated}>
               <UserDashboard />
           </ProtectedRoute>
           } />
            <Route path='/user/blog/add' element={
              <ProtectedRoute isAuthenticated = {isAuthenticated}>
                <CreateBlogs />
              </ProtectedRoute>
          } />
            <Route path='/user/myblogs' element={
              <ProtectedRoute isAuthenticated = {isAuthenticated}>
                <MyBlogs /> 
              </ProtectedRoute>
            } />  


            {/* Admin route */}
            <Route path='/admin/dashboard' element={
              <ProtectedRoute 
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === 'admin'} 
              adminRoute = {true} >
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path='/admin/category' element={
              <ProtectedRoute 
              isAuthenticated={isAuthenticated} 
              isAdmin={user && user.role === 'admin'} 
              adminRoute = {true} >
                <CreateCategory />
              </ProtectedRoute>
            } />
            <Route path='/admin/category/all' element={
              <ProtectedRoute 
              isAuthenticated={isAuthenticated} 
              isAdmin={user && user.role === 'admin'} 
              adminRoute = {true} >
                <Category />
              </ProtectedRoute>
            } />
            <Route path='/admin/users' element={
              <ProtectedRoute 
              isAuthenticated={isAuthenticated} 
              isAdmin={user && user.role === 'admin'}
              adminRoute = {true} >
                <User />
              </ProtectedRoute>
            } />
            <Route path='/admin/blog/add' element={
              <ProtectedRoute isAuthenticated = {isAuthenticated} 
              isAdmin={user && user.role === 'admin'}
              adminRoute = {true} >
                <CreateBlog/>
              </ProtectedRoute>
            } />
            <Route path='/admin/myblogs' element={
              <ProtectedRoute 
              isAuthenticated = {isAuthenticated} 
              isAdmin={user && user.role === 'admin'}
              adminRoute = {true} >
                <MyBlog />
              </ProtectedRoute>
            } />
          </Routes>
          <Footer/>
          <Toaster />
          </>          
        )
      }
    </Router>
  );
}

export default App;
