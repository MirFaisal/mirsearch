import { NavLink } from "react-router-dom";

const SearchTerm = () => {
    return (
      <div className="w-full p-4 bg-white shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <ul className="flex gap-4 flex-wrap items-center justify-center text-gray-900 dark:text-white">
          <li>
            <NavLink to={"/all"}>All</NavLink>
          </li>
          <li>
            <NavLink to={"/image"}>Image</NavLink>
          </li>
          <li>
            <NavLink to={"/video"}>Video</NavLink>
          </li>
        </ul>
      </div>
    );
};

export default SearchTerm;