import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { WhatICanDoPage } from "./pages/WhatICanDoPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/home' element={<Navigate to='/' />} />
      <Route path='/sobre' element={<AboutPage />} />
      <Route path='/competencias' element={<WhatICanDoPage />} />
      <Route path='/portifolio' element={<PortfolioPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)