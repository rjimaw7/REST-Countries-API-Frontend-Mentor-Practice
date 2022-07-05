import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Country from "../pages/Country";

import Pagination from "./Pagination";

const Countries = () => {
  const API_URL = "https://restcountries.com/v2/all";
  const [country, setCountry] = useState([]);
  const [loading, isLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const getCountry = async () => {
      isLoading(true);
      const response = await axios.get(API_URL);

      setCountry(response.data);
      isLoading(false);
    };

    getCountry();
  }, []);

  //   Get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = country.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {console.log(currentPosts)}
      {/* SEARCH FEATURE */}

      <div className="flex justify-around p-8 filtersearch">
        <fieldset className="mr-40">
          <label for="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-100"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="text"
              name="Search"
              placeholder="Search..."
              className="fieldset-input w-full py-2 pl-14 mr-20 text-sm rounded-md  focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </fieldset>
        {/* FILTER FEATURE */}

        <div className="relative">
          <select
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full p-2.5 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400e"
          >
            <option value="" disabled selected>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <section className="h-screen w-screen p-2 container mx-auto">
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
          {currentPosts
            .filter((data) => data.name.toLowerCase().includes(query))
            .filter((data) => data.region.toLowerCase().includes(filterQuery))
            .map((currentPosts, index) => (
              <Country key={index} country={currentPosts} />
            ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={country.length}
          paginate={paginate}
        />
      </section>
    </>
  );
};

export default Countries;
