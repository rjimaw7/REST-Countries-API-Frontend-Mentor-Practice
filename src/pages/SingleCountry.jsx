import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const SingleCountry = () => {
  const { countryCode } = useParams();
  const API_URL = `https://restcountries.com/v2/alpha/${countryCode}`;

  const [singleCountryData, getSingleCountryData] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const getSingleCountry = async () => {
      const response = await axios.get(API_URL);

      getSingleCountryData(response.data);
      isLoading(false);
    };

    getSingleCountry();
  }, [API_URL]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto mt-5">
        <Link
          to="/"
          className="bg-inherit border border-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span> Back </span>
        </Link>

        <div className="flex justify-between mt-20">
          <img
            src={singleCountryData.flags.png}
            alt=""
            className="h-56 lg:h-60 object-cover"
          />

          <div className=" flex flex-col mr-40 p-8">
            <h1 className="text-lg font-bold">{singleCountryData.name}</h1>
            <br />

            <div className="flex">
              <div className="mr-20">
                <p>Native Name: {singleCountryData.nativeName} </p>
                <p>Population: {singleCountryData.population}</p>
                <p>Region: {singleCountryData.region}</p>
                <p>Sub Region: {singleCountryData.subregion}</p>
                <p>
                  Capital:{" "}
                  {singleCountryData.capital === undefined
                    ? "No Data Available"
                    : singleCountryData.capital}
                </p>
              </div>

              <div className="p-2 ml-7">
                <p>
                  Top Level Domain :{" "}
                  {singleCountryData.topLevelDomain[0]
                    ? singleCountryData.topLevelDomain[0]
                    : "No Data"}
                </p>
                <p>
                  Currencies:{" "}
                  {singleCountryData.currencies === undefined
                    ? "No Data Available"
                    : singleCountryData.currencies[0].name}
                </p>
                <p>
                  Languages:{" "}
                  {singleCountryData.languages.map((language) => language.name)}
                </p>
              </div>
            </div>

            <div className="mt-20">
              <p>
                Border Countries:{" "}
                {/* {singleCountryData.borders.map((border, idx) => (
                  <span
                    key={idx}
                    className="bg-inherit border border-gray-900 text-white font-bold py-2 px-4 m-1 rounded inline-flex items-center"
                  >
                    {border}
                  </span>
                ))} */}
                {singleCountryData.borders &&
                  singleCountryData.borders.map((border, idx) => (
                    <span
                      key={idx}
                      className="bg-inherit border border-gray-900 text-white font-bold py-2 px-4 m-1 rounded inline-flex items-center"
                    >
                      {border}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Country Details */}
    </>
  );
};

export default SingleCountry;
