export const getMovies = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};

  
export const login = async (username, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to login:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};


export const signup = async (username, password) => {
  try {
    const response = await fetch('http://localhost:3000/api/users?action=register', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to signup:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};
