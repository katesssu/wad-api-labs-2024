export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:3000/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

  
export const login = async (username, password) => {
  const response = await fetch('http://localhost:3000/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:3000/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};