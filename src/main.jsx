import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App';
import BarChart from './components/BarChart/BarChart';
import PleChart from './components/PleChart/PleChart';
import LineChart from './components/LineChart/LineChart';
import FaqPage from './components/FAQPage/FAQPage';
import Calendar from './components/Calendar/Calendar';
import ProfileForm from './components/ProfileForm/ProfileForm';
import Invoices from './components/Invoices/Invoices';
import Contacts from './components/Contacts/Contacts';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import DashBoard from './components/DashBoard/DashBoard';
import GeographyBased from './components/Geography/GeographyBased';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<DashBoard />} />
      <Route path="/Manage" element={<Manage />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/Invoices" element={<Invoices />} />
      <Route path="/ProfileForm" element={<ProfileForm />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/FAQPage" element={<FaqPage />} />
      <Route path="/BarChart" element={<BarChart />} />
      <Route path="/PleChart" element={<PleChart />} />
      <Route path="/LineChart" element={<LineChart />} />
      <Route path="/GeographyBased" element={<GeographyBased />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);







ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>)