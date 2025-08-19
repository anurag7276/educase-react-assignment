import React from 'react'

function LoginScreen({ setScreen }) {
   return (
      <div className="p-8">

        <h1 className="text-2xl font-bold mb-2">Signin to your PopX account</h1>

        <p className="text-gray-500 mb-8 text-sm">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>


        <form className="space-y-6">

          <div className="flex flex-col">
            <label htmlFor="emailAddress" className="text-sm text-violet-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              placeholder="Enter email address"
              className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-violet-600 rounded-md text-base"
              aria-label="Email Address"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-violet-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-violet-600 rounded-md text-base"
              aria-label="Password"
            />
          </div>

          <button
            type="button"
            onClick={() => setScreen('profile')}
            className="w-full bg-violet-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-violet-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Login
          </button>
          
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setScreen('landing')}
            className="text-sm text-gray-500 hover:underline"
          >
            Back to Welcome Screen
          </button>
        </div>

      </div>
    );
}

export default LoginScreen