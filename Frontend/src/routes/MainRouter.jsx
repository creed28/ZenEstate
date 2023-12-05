import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Properties from '../pages/Properties';
import PropertyDetails from '../pages/PropertyDetails';
import CreateProperty from '../pages/CreateProperty';
import ContractList from '../pages/ContractList';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { MainLayout } from '../layouts/MainLayout';
import { ProtectedRoute } from './ProtectedRoute';

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/create-property' element={<CreateProperty />} />
          <Route path='/contract-list' element={<ContractList />} />
        </Route>
      </Route>
    </Route>
  )
);