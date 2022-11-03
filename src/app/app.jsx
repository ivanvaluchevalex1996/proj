/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import "./app.css";
import {
  Alert, Pagination, Input, Tabs,
} from "antd";
import { Offline, Online } from "react-detect-offline";

import { Provider } from "../context";
import MovieList from "../movieList/movieList";
import {
  questSession, ratedGet, getGenres, getMovies,
} from "../functions/fetch";
import "antd/dist/antd.min.css";

function App() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [genress, setGenres] = useState([]);
  const [value, setValue] = useState("");
  const [end, setEnd] = useState([]);

  const filterFilms = items.filter((film) => film.original_title.toLowerCase().includes(value.toLowerCase()));

  const updateQuery = (e) => setValue(e.target.value);

  const debounceOnChange = debounce(updateQuery, 500);

  const pagination = (page) => {
    getMovies(page);
  };

  useEffect(() => {
    ratedGet(setEnd);
  }, [end]);

  useEffect(() => {
    getMovies(1, setIsLoaded, setItems, setError);
    getGenres(setGenres);
    questSession();
  }, []);

  return (
    <div>
      <Provider value={genress}>
        <Online>
          <Tabs>
            <Tabs.TabPane tab="Searh" key="1">
              <Input placeholder="Find movies..." onChange={debounceOnChange} />
              {filterFilms.length === 0 ? (
                <Alert
                  className="alert"
                  type="error"
                  message="Поиск не дал результатов."
                  banner
                />
              ) : <MovieList items={filterFilms} isLoaded={isLoaded} error={error} />}
              <Pagination defaultCurrent={1} total={50} onChange={pagination} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Rated" key="2">
              <MovieList items={end} isLoaded={isLoaded} error={error} />
            </Tabs.TabPane>
          </Tabs>
        </Online>
        <Offline>
          <Alert
            className="alert"
            type="error"
            message="Нет сети, проверьте правильность подключения."
            banner
          />
        </Offline>
      </Provider>
    </div>
  );
}
export default App;
