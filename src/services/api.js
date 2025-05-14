export const getPopularMovies = async () => {
  return [
    {
      id: 1,
      title: "Inception",
      release_date: "2010-07-16",
      poster_path: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
    },
    {
      id: 2,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    
   
    {
      id: 5,
      title: "The Avengers",
      release_date: "2012-05-04",
      poster_path: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
    }
    // Add more movies as needed
  ];
};


export const searchMovies = async (query) => {
  // Mock search data example
  return [
    {
      id: 1,
      title: "Inception",
      release_date: "2010-07-16",
      poster_path: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
    },
    {
      id: 2,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    }
  ];
};
