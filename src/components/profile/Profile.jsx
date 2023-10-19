

import React, { useState, useEffect } from 'react';

function Profile() {
  const userData = JSON.parse(localStorage.getItem('user'));
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    
  }, [userData]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {userData ? (
        <div>
          <p className="text-lg mb-2">Email: {userData.user.email}</p>
          <p className="text-lg">UID: {userData.user.uid}</p>
          <p className="text-lg">Orders: {orderCount}</p>
          
          {/* Additional user information can be displayed here */}
        </div>
      ) : (
        <p className="text-lg">No user data available</p>
      )}
    </div>
  );
}

export default Profile;


