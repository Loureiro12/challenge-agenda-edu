import { useState } from 'react'
import api from '../services/api'

interface Movie {
  id: string
  title: string
  release_date: string
  poster_path: string
}

interface GenresProps {
  id: string
  name: string
}

interface SpecificMovieProps {
  title: string
  overview: string
  poster_path: string
  vote_average: string
  genres: Array<GenresProps>
}

export default function useMovie() {
  const [movie, setMovie] = useState<Movie[]>([])
  const [specificMovie, setSpecificMovie] = useState<SpecificMovieProps>({} as SpecificMovieProps)

  function fetchMovie(page: number) {
    api
      .get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
      .then((response) => {
        setMovie(response.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function fetchSpecificMovie(id: string) {
    api
      .get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-Br`)
      .then((response) => {
        console.log('entrou', response.data)
        setSpecificMovie(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    fetchMovie,
    fetchSpecificMovie,
    movie,
    specificMovie,
  }
}
