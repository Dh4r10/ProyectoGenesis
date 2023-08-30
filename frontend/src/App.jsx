import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import StudentsViewPage from "./assets/pages/StudentsView/StudensViewPage";
import PrincipalView from './assets/pages/PrincipalView'
import LoginPage from "./assets/pages/login/LoginPage";

import PrivateRoutes from "./assets/utils/PrivateRoutes";

import { AuthProvider } from "./assets/contexts/AuthContext";
import { VistaUserProvider } from './assets/contexts/VistaUserContext'
import PsychologistViewPage from "./assets/pages/PsychologistsView/PsychologistViewPage";


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <VistaUserProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
              {/* <Route element={<StudentsViewPage />} path="/" exact /> */}
              <Route element={<PrincipalView />} path="/" exact />
            </Route>
            {/* <Route element={<StudentsViewPage />} path="/" exact /> */}
            <Route element={<LoginPage />} path="/login" />
            {/* <Route element={<LoginPage />} path="*" /> */}

            <Route element={<PsychologistViewPage />} path="/psicologo/*" />

          </Routes>
        </VistaUserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
