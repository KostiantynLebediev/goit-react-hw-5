import css from "./MovieList.module.css";
import { Link, useSearchParams, useLocation } from "react-router-dom";

export default function MovieList({ movies, from }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const location = useLocation();
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{
              from,
              search: query,
              previousLocation: location,
            }}
            className={css.movieLink}
          >
            <h2 className={css.movieTitle}>{movie.title}</h2>
            <img
              className={css.movieImage}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
