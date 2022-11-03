// export function getMovies(page) {
//   fetch(`https://api.themoviedb.org/3/search/movie?api_key=c1a22ba4a7ffc5556360b6a8ecf7d62d&query=return&page=${page}`)
//     .then((res) => res.json())
//     .then(
//       (result) => {
//         setIsLoaded(false);
//         setItems(result.results);
//         console.log(result.results);
//       },
//       () => {
//         setError(true);
//       },
//     );
// }

// export default getMovies;
