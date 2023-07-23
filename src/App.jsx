import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Demo";
import Demo from "./components/login/Demo";

let Btn = lazy(() => import('./components/Data'));

const App = () => {
  return <>
    <Demo />
    {/* <ContextProvider>

  
      <BrowserRouter>
        <Data />
        <Routes>
          <Route path="/register" element={<Dummy />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider> */}
  </>
};

export default App;
