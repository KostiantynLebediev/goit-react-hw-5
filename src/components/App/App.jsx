import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviePage/MoviPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/HomeDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("../../components/MoviCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MovieCast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MovieReviews />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}