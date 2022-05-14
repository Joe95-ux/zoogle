import { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const options = {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      "X-RapidAPI-Key": "2af096d5cfmshf52fcf46b8474c1p1c3a4cjsn71cf255c0093"
    }
  };

  const getResults = async url => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, options);
    const data = await res.json();
  
    if(url.includes('/news')){
      setResults(data.entries);
    }else if(url.includes('/image')){
      setResults(data.image_results);
    }else{
      setResults(data.results)
    }

    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
