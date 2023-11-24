import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import TopAgents from '../pages/TopAgents';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import { Layout } from '../layouts/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/top-agents" element={<TopAgents />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Route>
  )
);