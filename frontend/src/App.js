import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Authentication from "./Components/LoginPage";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieInfo";
import MovieCardsList from "./Components/MovieCardsList";
import FloatingSpeedDial from "./Components/SpeedDial";
import About from "./Components/About";
import { auth } from "./firebase";
import ChronoContainer from "./Components/MarvelChrono";
import Footer from "./Components/Footer";
import "./App.css"; // Import global styles

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loader-container">
    <div className="glow-ring">
      <div className="core">        
      </div>
    </div>
  </div>
    ;
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  const [legacyMovies, setLegacyMovies] = useState([]);
  const [timelineMovies, setTimelineMovies] = useState([]);
  const [webSeries, setWebSeries] = useState([]);
  const [user, setUser] = useState(null);

  const AllMovies = [...timelineMovies, ...legacyMovies, ...webSeries];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/movies");
        const data = await response.json();
        setLegacyMovies(data.legacyMovies);
        setTimelineMovies(data.timelineMovies);
        setWebSeries(data.webSeries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        {!user ? null : <Navbar />}
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Authentication />} />

          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Home
                legacyMovies={legacyMovies}
                timelineMovies={timelineMovies}
                webSeries={webSeries}
              />
            </ProtectedRoute>
          } />

          <Route path="/movie/:id" element={
            <ProtectedRoute>
              <MovieDetails AllMovies={AllMovies} />
            </ProtectedRoute>
          } />

          <Route path="/about" element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          } />
          <Route path="/timeline" element={
            <ProtectedRoute>
              <ChronoContainer />
            </ProtectedRoute>
          } />

          <Route path="/favourites" element={
            <ProtectedRoute>
              <MovieCardsList prop="Favourite" movieList="" />
            </ProtectedRoute>
          } />

          <Route path="/watchlist" element={
            <ProtectedRoute>
              <MovieCardsList prop="Save" movieList="" />
            </ProtectedRoute>
          } />

          <Route path="/timelinemovies" element={
            <ProtectedRoute>
              <MovieCardsList prop="Timeline" movieList={timelineMovies} />
            </ProtectedRoute>
          } />

          <Route path="/legacymovies" element={
            <ProtectedRoute>
              <MovieCardsList prop="Legacy" movieList={legacyMovies} />
            </ProtectedRoute>
          } />


          <Route path="/webseries" element={
            <ProtectedRoute>
              <MovieCardsList prop="Series" movieList={webSeries} />
            </ProtectedRoute>
          } />

          <Route path="/allmovies&series" element={
            <ProtectedRoute>
              <MovieCardsList prop="AllMovies" movieList={AllMovies} />
            </ProtectedRoute>
          } />
        </Routes>
        <ProtectedRoute>
          <Footer />
        </ProtectedRoute>

        {user ? <FloatingSpeedDial /> : null}
      </Router>
    </Provider>
  );
};

export default App;
