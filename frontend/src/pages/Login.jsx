import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    
  };

  return (
    <div className="text-center mt-14">
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-[400px] m-auto mt-14 gap-4">
        {/* Header */}
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {/* Input Fields */}
        {currentState === 'Login' ? '' : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Enter your name"
            required
          />
        )}
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Enter your password"
          required
        />

        {/* Links for Forgot Password or Toggle */}
        {currentState === 'Login' ? (
          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer text-black hover:underline">Forgot your password?</p>
            <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-black hover:underline">
              Create an account
            </p>
          </div>
        ) : (
          <div className="w-full text-right text-sm mt-[-8px]">
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-black hover:underline">
              Login
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="px-8 py-2 bg-black text-white mt-4">
          {currentState}
        </button>
      </form>
    </div>
  );
};

export default Login;
