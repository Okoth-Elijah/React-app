import avatar from "../assets/images/avatar.jpeg";

const ProfileDropdown = () => {
  return (
    <div className="proflie">
      <img
        src={avatar}
        alt="Profile"
        className="profile-image"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          boxShadow: " 0px 1px 5px gray",
          opacity: "8",
          transition: "boxshadow easein",
        }}
      />
    </div>
  );
};

export default ProfileDropdown;
