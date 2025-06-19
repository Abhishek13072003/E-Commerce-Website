import React from "react";

function Dashboard({ userDetails }) {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      {userDetails ? (
        <>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

export default Dashboard;
