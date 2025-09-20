import { useInput } from "../hooks/useInput";


export default function Header() {
    const zipcodeInput = useInput();
    return (
        <header className="bg-gray-200 w-full h-16">
            <input
            className="w-1/2 h-full border-2 border-gray-300 rounded-md p-2 bg-white text-gray-700"
            {...zipcodeInput}
            placeholder="Enter zipcode"
            />

            <button className="w-1/2 h-full" onClick={zipcodeInput.inputReset}>
                Search
            </button>
        </header>
    )
}