import React from 'react'

function ProfileScreen({ setScreen }) {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="bg-white p-4">
        <button
          onClick={() => setScreen('landing')}
          className="text-gray-500 hover:text-gray-800 transition duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      </div>

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

        <div className="flex items-center mb-6">

          <div className="relative">
            
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <svg className="text-7xl text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            </div>

            {/* Camera icon is a placeholder for a photo upload button. */}
            <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full border border-gray-300 shadow-md">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.842-1.263a2 2 0 011.664-.89h.93a2 2 0 012 2v2a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 012-2h.93a2 2 0 001.664-.89l.842-1.263a2 2 0 011.664-.89H21m-6 6a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            
          </div>

          <div className="ml-4">
            <h2 className="text-xl font-bold">Marry Doe</h2>
            <p className="text-gray-500">Marry@gmail.com</p>
          </div>

        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
          bibendum dictum sed sed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>

      </div>

    </div>
  );
}

export default ProfileScreen