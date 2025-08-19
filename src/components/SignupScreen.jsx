import React,{useState} from 'react'

function SignupScreen({ setScreen }) {
 const [isAgency, setIsAgency] = useState(false);

  return (
    <div className="p-8">

      <h1 className="text-2xl font-bold mb-8">Create your PopX account</h1>

      <form className="space-y-6">

        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-sm text-violet-600 mb-1">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-violet-600 rounded-md text-base"
            aria-label="Full Name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-sm text-violet-600 mb-1">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-violet-600 rounded-md text-base"
            aria-label="Phone Number"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="emailAddress" className="text-sm text-violet-600 mb-1">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="emailAddress"
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-violet-600 rounded-md text-base"
            aria-label="Email Address"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm text-violet-600 mb-1">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-violet-600 rounded-md text-base"
            aria-label="Password"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="companyName" className="text-sm text-violet-600 mb-1">
            Company name
          </label>
          <input
            type="text"
            id="companyName"
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-violet-600 rounded-md text-base"
            aria-label="Company Name"
          />
        </div>
        
        {/* Radio buttons for 'Are you an Agency?' */}
        <div>
          <p className="text-sm font-semibold mb-2">Are you an Agency?<span className="text-red-500">*</span></p>
          
          <div className="flex space-x-4">

            <div className="flex items-center">
              <input
                type="radio"
                id="isAgencyYes"
                name="isAgency"
                value="yes"
                checked={isAgency === true}
                onChange={() => setIsAgency(true)}
                className="hidden"
              />
              <label htmlFor="isAgencyYes" className="flex items-center cursor-pointer">
                {isAgency === true ? (
                  <svg className="text-violet-600 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.29-6.93l-2.83 2.83c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L9.5 9.5l2.83-2.83c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L12.92 12l2.83 2.83c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 13.41l-2.83 2.83c-.39.39-1.02.39-1.41 0z" />
                  </svg>
                ) : (
                  <svg className="text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                )}
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="isAgencyNo"
                name="isAgency"
                value="no"
                checked={isAgency === false}
                onChange={() => setIsAgency(false)}
                className="hidden"
              />
              <label htmlFor="isAgencyNo" className="flex items-center cursor-pointer">
                {isAgency === false ? (
                  <svg className="text-violet-600 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.29-6.93l-2.83 2.83c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L9.5 9.5l2.83-2.83c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L12.92 12l2.83 2.83c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 13.41l-2.83 2.83c-.39.39-1.02.39-1.41 0z" />
                  </svg>
                ) : (
                  <svg className="text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                )}
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>

          </div>
        </div>

        <button
          type="button"
          onClick={() => setScreen('profile')}
          className="w-full bg-violet-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-violet-700 transition duration-300"
        >
          Create Account
        </button>

      </form>

    </div>
  );
}

export default SignupScreen