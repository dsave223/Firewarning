import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../Components/ProtectedRoute';
import { io } from 'socket.io-client';
import Login from '../Components/pages/Login';
import Registre from '../Components/pages/Registre';
import Profile from '../Components/pages/Profile';
import Monitoring from '../Components/pages/Monitoring';
import Activity from '../Components/pages/Activity';
import ActivityHistory from '../Components/pages/ActivityHistory';
import Manual from '../Components/pages/Manual';

const socket = io(""); // Reemplaza con la URL de tu servidor Socket.io

function App() {

  const [user, setUser] = useState(null);
  const logout = () => setUser (null);
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    // Escucha el evento 'connect' para saber cuándo el cliente se conecta al servidor
    socket.on("connect", () => {
      console.log("Client conectado al server");
    });

    // Escucha el evento 'server:all_data' para recibir el listado completo de la base de datos
    socket.on("server:all_data", (data) => {
      console.log("Listado completo recibido del servidor:", data);
      setSensorData(JSON.parse(data));
    });

    // Escucha el evento 'server:updated_data' para recibir las actualizaciones de datos
    socket.on("server:updated_data", (data) => {
      console.log("Actualización de datos recibida del servidor:", data);
      setSensorData(JSON.parse(data));
    });

    // Limpia los listeners al desmontar el componente
    return () => {
      socket.off("connect");
      socket.off("server:all_data");
      socket.off("server:updated_data");
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registre" element={<Registre />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity-history" element={<ActivityHistory />} />
        <Route path="/manuel" element={<Manual />} />
        <Route element={<ProtectedRoute isAllowed={!!user}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;