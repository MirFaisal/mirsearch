import "flowbite";
import { useContext } from "react";
import menuIconLight from "../../assets/menu-right-light.png";
import { AppContext } from "../../contexts/AppContextprovider";
import SearchInput from "../SearchInput/SearchInput";
const Navbar = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  return (
    <nav className="bg-white  dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        {/* Navbar Barand or logo */}
        <a className="flex items-center space-x-3 rtl:space-x-reverse ps-4 md:ps-0">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" alt="" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            mirsearch
          </span>
        </a>
        {/* mobile menu and theme controler */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse pe-4">
          <button
            onClick={() => {
              toggleTheme();
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {themeMode ? (
              <>
                <div className="flex items-center gap-3">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/tiny-color/16/full-moon.png"
                    alt="full-moon"
                  />
                  <span>Light</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/plumpy/24/moon-satellite.png"
                    alt="moon-satellite"
                  />
                  <span>Dark</span>
                </div>
              </>
            )}
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {themeMode ? (
              <img src={menuIconLight}></img>
            ) : (
              <img src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTEgMTYuNzQ1YzAtLjQxNC4zMzYtLjc1Ljc1LS43NWg5LjVjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1aC05LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1em0tOS01YzAtLjQxNC4zMzYtLjc1Ljc1LS43NWgxOC41Yy40MTQgMCAuNzUuMzM2Ljc1Ljc1cy0uMzM2Ljc1LS43NS43NWgtMTguNWMtLjQxNCAwLS43NS0uMzM2LS43NS0uNzV6bTQtNWMwLS40MTQuMzM2LS43NS43NS0uNzVoMTQuNWMuNDE0IDAgLjc1LjMzNi43NS43NXMtLjMzNi43NS0uNzUuNzVoLTE0LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"></img>
            )}
          </button>
        </div>

        {/* Navbar menu */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:pe-4"
          id="navbar-sticky"
        >
          <ul className="bg-white flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className=" bg-gray-200 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 border-none md:border-b">
              <SearchInput />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Navbar.propTypes = {
//   toggleTheme: PropTypes.func.isRequired,
//   themeMode: PropTypes.bool.isRequired,
// };
