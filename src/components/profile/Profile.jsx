import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';

function Profile() {
  const context = useContext(myContext);
  const { loading, setLoading, logout, user } = context;

  useEffect(() => {
    // You can include additional logic or fetch data when the component mounts
    // For example, fetch user-specific data or perform other actions
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />} {/* Assuming you have a Loader component for loading state */}
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <div>
          <h1 className="text-center text-white text-xl mb-4 font-bold">User Profile</h1>
        </div>
        {user ? (
          <div>
            <p className="text-white">Name: {user.name}</p>
            <p className="text-white">Email: {user.email}</p>
            {/* Add more user information here based on your user context */}
          </div>
        ) : (
          <p className="text-white">No user data available</p>
        )}
        <div className="flex justify-center mb-3">
          <button
            onClick={() => {
              logout(); // Assuming you have a logout function in your context
            }}
            className="bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account?{' '}
            <Link className="text-red-500 font-bold" to={'/signup'}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
