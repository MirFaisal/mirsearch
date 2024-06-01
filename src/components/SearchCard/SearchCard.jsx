import { useContext } from "react";
import { AppContext } from "../../contexts/AppContextprovider";
const SearchCard = () => {
  const { result } = useContext(AppContext);
  // console.log(result);
  return (
    <div className="w-full p-4 bg-white shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {result
            ? result.map(({ title, sitelinks, snippet, link }, index) => {
                return (
                  <li key={index} className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          width="48"
                          height="48"
                          src="https://img.icons8.com/color/48/google-logo.png"
                          alt="google-logo"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <a
                          target="_blank"
                          href={`${sitelinks ? sitelinks[0].link : link}`}
                        >
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {title}
                          </p>
                        </a>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {sitelinks ? sitelinks[0].link : link}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">
                          {snippet}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <a
                          href={sitelinks ? sitelinks[0].link : link}
                          target="_blank"
                        >
                          <img
                            width="38"
                            height="38"
                            src="https://img.icons8.com/fluency/48/arrow.png"
                            alt="arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })
            : "No result found"}
        </ul>
      </div>
    </div>
  );
};

export default SearchCard;
