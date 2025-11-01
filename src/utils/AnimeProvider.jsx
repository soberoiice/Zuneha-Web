import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const AnimeContext = createContext();

export const useAnime = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
  const [homepage, setHomepage] = useState([]); // LST OF POPULAR MANGA
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState();
  // FUNCTION TO GET HOMEPAGE INFO
  const getHomepage = async () => {
    try {
      setHomepage([]);
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(
        `https://corsproxy-psi.vercel.app/api/proxy?url=${apiUrl}`
      );
      setHomepage(response.data.results);
      console.log("api data:", response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // FUNCTION TO GET HOMEPAGE INFO
  const getAnimeDetails = async (id) => {
    try {
      setInfo([]);
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(
        `https://corsproxy-psi.vercel.app/api/proxy?url=${apiUrl}info?id=${id}`
      );
      setInfo(response.data.results);
      console.log("api data:", response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AnimeContext.Provider
      value={{
        getHomepage,
        homepage,
        loading,
        getAnimeDetails,
        info,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
