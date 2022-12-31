import React from 'react';
import { getAccess } from "../shared/Backend";

export function Login() {
  const [accessCode, setAccessCode] = React.useState("");

  const handleChange = e => {
    setAccessCode(e.target.value);
  };

  const handleSubmit = () => {
    getAccess(accessCode);
  };

  return <div className="grid items-center justify-center w-full h-full overflow-y-auto bg-neutral-50">
            <div className="w-[90vw] xs:w-96 p-4 xs:bg-white xs:border border-gray-200 xs:rounded-lg xs:shadow-md sm:p-6 md:p-8">
                <div>
                    <img className="w-16 h-16 mx-auto" src="/TESA_logo_white.jpeg" alt="TESA_logo" />
                </div>
                <label htmlFor="accessCode" className="block mb-2 font-medium text-light-text-primary">
                    Enter Access Code
                </label>
                <input type="password" name="accessCode" placeholder="Enter Code" className="bg-gray-50 border border-light-separator text-light-text-primary text-base rounded-lg focus:ring-light-main-secondary focus:border-light-main-secondary block w-full p-2.5 placeholder:tracking-wider mb-4" onChange={handleChange} value={accessCode} />
                <button onClick={handleSubmit} className="text-light-text-primary text-base rounded-md py-2.5 px-5 border-2 border-light-separator w-full bg-light-secondary transform focus:scale-95 font-medium text-center ">
                    Submit
                </button>
            </div>
        </div>;
}
  