import React from "react";
import { useState, useEffect } from "react";
import "./LessonsDetailsComponent.scss";
import { loadLessons } from "../../actions/LessonAction";
import lessonsStore from "../../stores/LessonsStore";
import { useAuth0 } from "@auth0/auth0-react";


function LessonDetail(props) {
  const { user, isAuthenticated } = useAuth0();

  const [lessons, setLessons] = useState(lessonsStore.getLessons());
  const [lessonId, setLessonId] = useState(props.match?.params?.lessonId);
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonPhoto, setLessonPhoto] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");
  const [isBooked, setIsBooked] = useState(null);

  useEffect(() => {
    lessonsStore.addChangeListener(onChange);
    if (lessons.length === 0) {
      (async function loadAllLessons() {
        await loadLessons();
      })();
    } else if (lessonId) {
      const lesson = lessonsStore.getLessonById(lessonId);

      if (lesson) {
        setLessonId(lesson._id);
        setLessonTitle(lesson.title);
        setLessonPhoto(lesson.photo);
        setLessonDescription(lesson.description);
        // (async function userLoading() {
        //   await loadUser(user?.sub);
        //   setMongoUser(userStore.getUser());
        //   const toogleButton = mongoUser?.groups.some((item) => {
        //     return item === groupId;
        //   });
        //   setMember(toogleButton);
        // })();
      }
    }
    return () => lessonsStore.removeChangeListener(onChange);
  }, [lessons]);
  

  function onChange() {
    setLessons(lessonsStore.getLessons());
  }

//   function onSubmit(lessonId, user){
//     (async function userLoading() {
//       await loadUser(user?.sub);
//       setMongoUser(userStore.getUser());
//       const toogleButton = mongoUser?.groups.some((item) => {
//         return item === groupId;
//       });
//       setMember(toogleButton);
//       memberJoin(groupId, user)
//     })();
//   }

  return (
    <>
      <div className="banner__container">
        <img
          src="https://secure.meetupstatic.com/photos/event/7/7/c/5/highres_491130661.jpeg"
          alt=""
        />
        <div className="banner__container-title">
          <h1>LESSON</h1>
        </div>
      </div>
      <div className="group-detail__container">
        <div className="group-header__container">
          <div className="group-title">
            <h2>{lessonTitle}</h2>
          </div>
          <img src={lessonPhoto} alt="group-photo" />
        </div>
        <div className="group-info__container">
          <div className="group-description">
            <h3 className="group-description-title">Description</h3>
            <h4>{lessonDescription}</h4>
          </div>
          <div>
            <div className="group-inscription">
              {!isAuthenticated && (
                <h4>You Need to Login if you want to book..</h4>
              )}
              {isAuthenticated && (
                <div className="joinus-button__container">
                  <button
                    className="inscription__button"
                   
                  >
                    Book!
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LessonDetail;
