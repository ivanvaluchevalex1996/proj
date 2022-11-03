export async function questSession() {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=c1a22ba4a7ffc5556360b6a8ecf7d62d",
    );
    const result = await data.json();
    localStorage.setItem("token", result.guest_session_id);
  } catch (e) {
    // console.log(e);
  }
}

export async function ratedGet(setEnd) {
  try {
    const token = localStorage.getItem("token");
    const data = await fetch(
      `https://api.themoviedb.org/3/guest_session/${token}/rated/movies?api_key=c1a22ba4a7ffc5556360b6a8ecf7d62d&language=en-US&sort_by=created_at.asc`,
    );
    const result = await data.json();
    setEnd(result.results);
    // console.log(rating);
    // setRating(result.results.rating);
    // console.log(result.results);
  } catch (e) {
    // console.log(e);
  }
}
export async function getMovies(page, setIsLoaded, setItems, setError) {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=c1a22ba4a7ffc5556360b6a8ecf7d62d&query=return&page=${page}`)
    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(false);
        setItems(result.results);
      },
      () => {
        setError(true);
      },
    );
}
export async function getGenres(setGenres) {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c1a22ba4a7ffc5556360b6a8ecf7d62d&language=en-US",
    );
    const result = await data.json();
    setGenres(result.genres);
  } catch (e) {
    // console.log(e);
  }
}

export async function ratedPost(value, idd) {
  try {
    const token = localStorage.getItem("token");
    const data = await fetch(`https://api.themoviedb.org/3/movie/${idd}/rating?api_key=c1a22ba4a7ffc5556360b6a8ecf7d62d&guest_session_id=${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        value,
      }),
    });
    await data.json();
  } catch (e) {
    // console.log(e);
  }
}

export default getGenres;
