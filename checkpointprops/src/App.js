import React from "react";
import Profile from "./Components/Profile/Profile";
import "./App.css";
import photo from "./amal.jpg";

function App() {
    const handleAlert = (fullName) => {
        alert(`this is ${fullName}`);
    };
    return (
        <div className="App">
            <Profile
                fullName="Amal Lahmar"
                handleAlert={handleAlert}
                bio="“This team had a direct impact in me obtaining a new job at Amazon Web Services. They wrote a new resume and profile (and installed it) with the latest technology keywords such as AWS, cloud, virtualization, machine learning and IoT. I will continue to recommend them to my colleagues.”"
                profession="Embedded Systems Engineer"
            >
                <img src={photo} alt="amal" className="im" />
            </Profile>
        </div>
    );
}

export default App;
