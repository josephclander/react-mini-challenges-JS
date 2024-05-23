import { useState, useEffect } from "react";

const Solution10 = () => {
  const [myData, setMyData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all");
        const { data } = await response.json();
        setMyData(data);
        console.log(myData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
  }, []);
  return (
    <div>
      {error && <div>Error loading data</div>}
      {loading && <div>Loading, please wait</div>}
      <ul>
        {myData &&
          myData.map((item) => <li key={item.ccn3}>{item?.name?.common}</li>)}
      </ul>
    </div>
  );
};

export default Solution10;
