export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=be66b7b48b74eeb7e9b82961148f44c7&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };