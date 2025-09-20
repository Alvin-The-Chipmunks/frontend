import { useInput } from "../hooks/useInput";
// import { useNavigate } from "react-router";
import logo from "../assets/soflo_atlus.png";
import { useZipcode } from "../AppRouter";

export default function Header({
  withLogo,
  withBackButton,
  setZipcode,
}: {
  withLogo?: boolean;
  withBackButton?: boolean;
  setZipcode: (zipcode: string) => void;
}) {
  const { zipcode } = useZipcode();
  const zipcodeInput = useInput(zipcode);
//   const navigate = useNavigate();

  const handleSearch = () => {
    setZipcode(zipcodeInput.value);
  };

//   async function handleGoBack() {
//     navigate(-1);
//   }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 w-full h-16 px-4">
      <div className="flex items-center justify-between h-full max-w-4xl mx-auto">
        {/* Left side - Back button */}
        <div className="flex items-center">
          {withLogo && (
            <img src={logo} alt="Logo" className="w-10 h-10" />
          )}
          {withBackButton && (
            <button
            //   onClick={handleGoBack}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-600 hover:text-gray-800"
              aria-label="Go back"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Center - Search bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <input
              className="w-full h-10 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent transition-all duration-200"
              {...zipcodeInput}
              placeholder="Enter zip code"
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full bg-[var(--primary)] text-white hover:bg-primary/80 transition-colors duration-200 shadow-sm"
              aria-label="Search"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
