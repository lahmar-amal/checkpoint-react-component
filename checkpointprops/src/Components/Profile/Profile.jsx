import React from "react";
import PropTypes from "prop-types";

function Profile({ fullName, bio, handleAlert, profession, children }) {
    return (
        <div className="App">
            {children}
            <h1 className="full">{fullName}</h1>
            <h5 className="pro" style={{ color: "#6e7582" }}>
                {profession}
            </h5>
            <h3 className="bio">{bio}</h3>

            <div className="but">
                <button onClick={() => handleAlert(fullName)}>
                    click here
                </button>
            </div>
        </div>
    );
}
Profile.defaultProps = {
    fullName: "Lahmar Amal",
    profession: "Engineer",
};
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string,
    handleAlert: PropTypes.func,
};

export default Profile;
