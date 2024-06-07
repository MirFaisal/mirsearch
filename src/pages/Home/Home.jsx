import "flowbite";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Footer/Loader";
import SearchCard from "../../components/SearchCard/SearchCard";
import { AppContext } from "../../contexts/AppContextprovider";
const Home = () => {
  const { loading, getResult, setSearchTrem, searchTrem } =
    useContext(AppContext);
  const pathName = useLocation().pathname;

  useEffect(() => {
    if (pathName === "/") {
      setSearchTrem(pathName);
      getResult("youtube");
    } else if (pathName === "/all") {
      setSearchTrem("/search");
      getResult("youtube");
    } else if (pathName === "/images") {
      setSearchTrem(pathName);
      getResult("youtube");
    } else if (pathName === "/videos") {
      setSearchTrem(pathName);
      getResult("Elon Mask");
    }
  }, [pathName, searchTrem]);

  // console.log(pathName);

  if (loading) {
    return <Loader />;
  }

  switch (pathName) {
    case "/":
      return <SearchCard />;
    case "/all":
      return <SearchCard />;
    case "/images":
      return <SearchCard />;
    case "/videos":
      return <SearchCard />;
    default:
      return <SearchCard />;
  }
};

export default Home;
