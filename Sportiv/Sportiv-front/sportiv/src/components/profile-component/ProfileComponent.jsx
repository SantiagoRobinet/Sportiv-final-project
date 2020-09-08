import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { createUser, loadUser } from "../../actions/userActions";
import { useEffect } from "react";
import userStore from "../../stores/UserStore";
import "./ProfileComponent.css";
import Loading from "../loading-component/LoadingComponent";

function Profile() {
  //implementar una propiedad en User que sea "firstTime: true/false" en donde si es true se muestra el formulario para que inserte los datos principales, y si es false que tenga la posibilidad de cambiar la contraseña.

  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [userLoaded, setUserLoaded] = useState(userStore.getUser());
  const [userId, setUserId] = useState(user?.sub);
  const [saveButton, setSaveButton] = useState(true);

  console.log(">>>>--PROFILE AUTHHHHH-->>>>>", userStore?.getUser());
  console.log(">>>>--IDDDDD-->>>>>", userId);

  useEffect(() => {
    userStore.addChangeListener(onChange);
    console.log(">>>---PROFILE USERLOADEEEDDD--->>>", userLoaded);
    console.log(">>>---auth user--->>>", user);

    if (!userLoaded) {
      loadUser(user?.sub);
    }
    // setUserLoaded(userStore.getUser());

    return () => userStore.removeChangeListener(onChange);
  }, [user, userLoaded]);

  function onChange() {
    setUserLoaded(userStore.getUser());
    setUserId(user.sub);
    setFirstName(userStore.getUser().firstName);
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  function onCreate(event, firstName, lastName, userName, user) {
    event.preventDefault();
    setSaveButton(true);
    createUser(firstName, lastName, userName, user);
  }

  return (
    (isAuthenticated && (
      <div className="main-profile__container">
        <h2 className="profile-title">Bienvenido {user?.nickname}!!</h2>
        <img className="profile-photo" src={user.picture} alt="profile photo" />
        <div className="profile-info">
          <h3>Your Info</h3>

          <p className="profile-email">{user?.email}</p>
        </div>

        <button
          className="profile-button"
          onClick={() => logout({ returnTo: "http://localhost:3000" })}
        >
          Logout
        </button>

        <form className="profile-form">
          <div className="profile-field">
            <label>Name</label>
            <input
              name="firstName"
              value={firstName}
              title="Tell us your first name"
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div className="profile-field">
            <label>Last Name</label>
            <input
              name="lastName"
              value={lastName}
              title="Tell us your last name"
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div className="profile-field">
            <label>User Name</label>
            <input
              name="userName"
              value={userName}
              title="Tell us your user name"
              onChange={(event) => setUserName(event.target.value)}
              required
            />
          </div>
          {saveButton && (
            <button
              className="save-button profile-button"
              type="submit"
              onClick={(event) =>
                onCreate(event, firstName, lastName, userName, user)
              }
            >
              Save Changes
            </button>
          )}
          <p className="form-advise">
            *You are new and we are happy to have you here! Fill this form
            please(only this time)
          </p>
        </form>
      </div>
    )) || <Loading />
  );
}
export default Profile;
