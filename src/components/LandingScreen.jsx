import React from 'react'

function LandingScreen({ setScreen }) {
 return (
    <div className="p-8 text-center flex flex-col justify-center items-center min-h-[500px]">

      <div className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
      </div>

      <div className="w-full space-y-4">
        <button
          onClick={() => setScreen('signup')}
          className="w-full bg-violet-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-violet-700 transition duration-300"
        >
          Create Account
        </button>
        <button
          onClick={() => setScreen('login')}
          className="w-full bg-violet-200 text-violet-600 font-semibold py-3 px-4 rounded-lg hover:bg-violet-300 transition duration-300"
        >
          Already Registered? Login
        </button>
      </div>
      
    </div>
  );
}

export default LandingScreen