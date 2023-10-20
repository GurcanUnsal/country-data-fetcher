export const CountryData = (props) => {
    return (
      <>
        <div className="mt-5 mx-auto rounded shadow color-blue col-lg-6 col-md-8 col-sm-10 p-3">
          <h1 className="fw-bold text-center">Country Data</h1>
          <hr className="w-75 mx-auto" />
          {props.officialName && <p>Official Name: {props.officialName}</p>}
          {props.commonName && <p>Common Name: {props.commonName}</p>}
          {props.capital && <p>Capital: {props.capital}</p>}
          {props.region && <p>Region: {props.region}</p>}
          {props.population > 0 && <p>Population: {props.population}</p>}
        </div>
        {props.flag && (
          <div className="container d-flex justify-content-center mt-5">
            <img
              className="shadow"
              src={props.flag}
              height="100"
              width="150"
              alt="Flag"
            />
          </div>
        )}
      </>
    );
  };
  