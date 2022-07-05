import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <div className="border border-gray-500">
      {/* <!-- Card 1 --> */}
      <Link
        to={`/country/${country.alpha2Code}`}
        className="bg-inherit rounded-lg  shadow-md max-w-xs md:max-w-none overflow-hidden"
      >
        <img
          className="h-56 lg:h-60 w-full object-cover"
          src={country.flag}
          alt="imgFlag"
        />
        <div className="p-3">
          <h3 className="font-semibold text-xl leading-6 text-white my-2">
            {country.name}
          </h3>
          <p className="paragraph-normal text-white">
            Population : {country.population}
          </p>

          <p className="paragraph-normal text-white">
            Region : {country.region}
          </p>

          <p className="paragraph-normal text-white">
            Capital : {country.capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
