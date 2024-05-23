import { useState, useEffect } from "react";

const Solution10 = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all");
        const { data } = response.json();
        setCountries(data.slice(0, 20));
        setLoading(false);
      } catch (error) {
        setError("Error loading data");
        setLoading(false);
      }
    };
  }, []);
  return (
    <div>
      {loading && <div>Loading data, please wait</div>}
      {error && <div>Error loading data</div>}
      {countries &&
        countries.map((country) => (
          <div key={country.ccn3}>{country?.name?.common}</div>
        ))}
    </div>
  );
};

export default Solution10;
