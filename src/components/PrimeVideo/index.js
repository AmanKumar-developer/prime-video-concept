// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const ActionMovieList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const ComedyMovieList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )
  return (
    <div className="prime-movie-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movie-container">
        <h1 className="movie-heading">Action Movies</h1>
        <MoviesSlider moviesList={ActionMovieList} />
      </div>
      <div className="movie-container">
        <h1 className="movie-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={ComedyMovieList} />
      </div>
    </div>
  )
}
export default PrimeVideo
