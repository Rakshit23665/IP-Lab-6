import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrincipalsDesk from './Pages/PrincipalsDesk/PrincipalsDesk';
import Departments from './Pages/Departments/Departments';

const router  = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>
  },
  {
    path: "/principalsDesk",
    element: <PrincipalsDesk/>
  },
  {
    path: "/departments",
    element: <Departments/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/  >
  );
}

export default App;
