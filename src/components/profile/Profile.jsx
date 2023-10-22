import React, { useState, useEffect, useContext } from 'react';
import myContext from '../../context/data/myContext';

function Profile() {
  const context = useContext(myContext);
  const { mode } = context;
  const userData = JSON.parse(localStorage.getItem('user'));
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    // You can add any additional logic here if needed
  }, [userData]);

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login';
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {userData ? (
        <div>
          <p className="text-lg mb-2">Name: {userData.user.name}</p>
          <p className="text-lg">Email: {userData.user.email}</p>
          <p className="text-lg">UID: {userData.user.uid}</p>
          <p className="text-lg">Orders: {orderCount}</p>
          {/* Additional user information can be displayed here */}
        </div>
      ) : (
        <p className="text-lg">No user data available</p>
      )}

      <div className="flow-root bg-black w-28 btn">
        <a onClick={logout} className="-m-2 block font-medium cursor-pointer text-white p-4" style={{ color: mode === 'dark' ? 'white' : '' }}>
          Logout
        </a>
      </div>
    </div>
  );
}

export default Profile;
