import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);
  return (
    isAuthenticated && (
      <div>
        <h1>Bienvenido {user?.name}!!</h1>
        <p>{user?.email}</p>
        <button onClick={() => logout({ returnTo: "http://localhost:3000" })}>
          Logout
        </button>
      </div>
    )
  );
};
export default Profile;
