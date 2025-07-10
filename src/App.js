import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login/Login';
import AppRoutes from './routes/AppRoutes';
import AuthContextProvider from './AuthContext';

import './assets/css/common.css'
function App() {
  return (
    <AuthContextProvider>
      <Router>
         <AppRoutes/> 
      </Router>
    </AuthContextProvider>
  );
}

export default App;
