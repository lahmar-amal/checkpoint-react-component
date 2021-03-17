import Address from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";
import ProfilPhoto from "./Components/Profile/ProfilPhoto";
import "./App.css";
function App() {
    return (
        <div className="App">
            <div className="image">
                <ProfilPhoto />
            </div>
            <div>
                <div className="full">
                    <FullName />
                </div>
                <h5 className="name" style={{ color: "#6e7582" }}>
                    Junior full-stack developer
                </h5>
            </div>
            <div className="add">
                <Address />
            </div>
            <div className="icons">
                <i
                    style={{ color: "#4267B2" }}
                    className="fab fa-facebook fa-2x"
                ></i>
                <i
                    style={{ color: "#006192" }}
                    className="fab fa-linkedin fa-2x"
                ></i>
                <i className="fab fa-github fa-2x"></i>
            </div>
            <br />
            <div>
                <hr />
                <h6 className="rights">
                    All rights reserved <i class="far fa-copyright"></i>
                </h6>
            </div>
        </div>
    );
}

export default App;
