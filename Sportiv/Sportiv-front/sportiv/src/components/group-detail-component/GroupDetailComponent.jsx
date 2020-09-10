import React from "react";
import { useState, useEffect } from "react";
import "./GroupDetailComponent.scss";
import { loadGroups } from "../../actions/GroupActions";
import groupStore from "../../stores/GroupStore";

function GroupDetail(props) {
  const [groups, setGroups] = useState(groupStore.getGroups());
  const [groupId, setGroupId] = useState(props.match?.params?.groupId);
  const [groupTitle, setGroupTitle] = useState("");
  const [groupPhoto, setGroupPhoto] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupCategory, setGroupCategory] = useState("");
  const [groupMembers, setGroupMembers] = useState("");

  useEffect(() => {
    groupStore.addChangeListener(onChange);
    if (groups.length === 0) {
      loadGroups();
    } else if (groupId) {
      const group = groupStore.getGroupById(groupId);
      if (group) {
        setGroupId(group._id);
        setGroupTitle(group.title);
        setGroupPhoto(group.photo);
        setGroupDescription(group.description);
        setGroupMembers(group.members);
        setGroupCategory(group.category);
      }
      console.log(groupCategory);
    } else {
    }
    return () => groupStore.removeChangeListener(onChange);
  }, [groups.length, props.match.params.groupId, groupId]);

  function onChange() {
    setGroups(groupStore.getGroups());
  }

  return (
    <>
      <div className="banner__container">
        <img
          src="https://secure.meetupstatic.com/photos/event/7/7/c/5/highres_491130661.jpeg"
          alt=""
        />
        <div className="banner__container-title">
          <h1>{groupCategory.toLocaleUpperCase()}</h1>
        </div>
      </div>
      <div className="group-detail__container">
        <div className="group-header__container">
          <div className="group-title">
            <h2>{groupTitle}</h2>
          </div>
            <img src={groupPhoto} alt="group-photo" />
        </div>
        <div className="group-info__container">
          <div className="group-description">
            <h3 className="group-description-title">Description</h3>
            <h4>{groupDescription}</h4>
          </div>
          <div className="info-participants group-members">
              <img
                src="https://www.flaticon.es/premium-icon/icons/svg/3249/3249789.svg"
                alt="participants-icon"
              />
              <p className="info-var">{groupMembers}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default GroupDetail;
