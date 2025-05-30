// Components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import './index.css'; // Import external CSS for loading animation
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });

    return () => unsubscribe();
  }, []);

  if (checking)
    return (<div className="loader-container">
      <div className="glow-ring">
        <div className="core"></div>
      </div>
    </div>);
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
