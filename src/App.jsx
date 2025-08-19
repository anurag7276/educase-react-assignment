import React, { useState } from 'react';
import ProfileScreen from './components/ProfileScreen';
import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';




//  icons will be used as inline SVGs to avoid dependency on external libraries.
// Main App component that manages the screen state and renders


const App = () => {
  // Use state to manage which screen is currently visible.
  const [screen, setScreen] = useState('landing');

  // Renders the component based on the current screen state.
  const renderScreen = () => {
    switch (screen) {
      case 'landing':
        return <LandingScreen setScreen={setScreen} />;
      case 'login':
        return <LoginScreen setScreen={setScreen} />;
      case 'signup':
        return <SignupScreen setScreen={setScreen} />;
      case 'profile':
        return <ProfileScreen setScreen={setScreen} />;
      default:
        return <LandingScreen setScreen={setScreen} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl">
        {renderScreen()}
      </div>
    </div>
  );
};



export default App;
