import "flowbite";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Footer/Loader";
import SearchCard from "../../components/SearchCard/SearchCard";
import { AppContext } from "../../contexts/AppContextprovider";
const Home = () => {
  const { loading, getResult } = useContext(AppContext);
  const pathName = useLocation().pathname;
  useEffect(() => {
    if (pathName === "/") {
      getResult("youtube", "search");
    } else if (pathName === "/all") {
      getResult("youtube", "search");
    } else if (pathName === "/image") {
      getResult("banana", "images");
    } else if (pathName === "/video") {
      getResult("google", "videos");
    }
  }, [pathName]);

  // console.log(pathName);

  if (loading) {
    return <Loader />;
  }

  switch (pathName) {
    // case "/":
    //   return <SearchCard />;
    // case "/all":
    //   return <SearchCard />;
    // case "/image":
    //   return <SearchCard />;
  }
};

export default Home;
