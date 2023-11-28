import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import OurAgents from '../pages/OurAgents';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import { MainLayout } from '../layouts/MainLayout';

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/our-agents" element={<OurAgents />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Route>
  )
);