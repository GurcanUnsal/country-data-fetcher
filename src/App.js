import { useState } from "react";
import axios from "axios";
import { HttpError } from "./utils/HttpError";
import { CountryData } from "./components/CountryData";
import { Header } from "./components/Header";

function App() {
  const [country, setCountry] = useState("");
  const [officialName, setOfficialName] = useState("");
  const [commonName, setCommonName] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState(0);
  const [region, setRegion] = useState("");
  const [flag, setFlag] = useState("");
  const [httpError, setHttpError] = useState(null);

  const handleChange = (value) => {
    setCountry(value);
  };

  const fetchCountry = async (event) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`
      );
      const responseData = response.data[0];
      setOfficialName(responseData.name.official);
      setCommonName(responseData.name.common);
      setCapital(responseData.capital[0]);
      setPopulation(responseData.population);
      setRegion(responseData.region);
      setFlag(responseData.flags.png);
      setCountry("");
    } catch (error) {
      setHttpError(error.message);
    }
    event.preventDefault();
  };

  if (httpError) {
    return <HttpError httpError={httpError} />;
  }

  return (
    <>
      <Header
        country={country}
        handleChange={handleChange}
        fetchCountry={fetchCountry}
      />
      <CountryData
        officialName={officialName}
        commonName={commonName}
        capital={capital}
        region={region}
        population={population}
        flag={flag}
      />
    </>
  );
}

export default App;
