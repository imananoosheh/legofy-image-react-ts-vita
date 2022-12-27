import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bgIMG from "./assets/img.jpg";
import "./App.css";
import LegoCanvas from "./components/LegoCanvas";
import { set } from "zod";

function App() {
    const imgWidth = 1350;
    const imgHeight = 1080;
    const [blurValue, setBlurValue] = useState('8');
    const [sizeValue, setSizeValue] = useState('50');

    return (
        <div className="App">
            <div
                id="main-container"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}
            >
                <div
                    style={{
                        maxWidth: "500px",
                    }}
                >
                    <img src="./src/assets/img.jpg" alt="by sabet" style={{maxWidth: "100%"}}/>
                    <div id="lego-overlay-container"></div>
                </div>
                <div style={{ maxWidth: "500px" }}>
                    <div id="blur-volume-container">
                        <label htmlFor="volume">Blur Volume</label>
                        <input
                            type="range"
                            value={blurValue}
                            id="blur-volume"
                            name="volume"
                            min={'0.1'}
                            max={'100'}
                            onChange={(event)=>{setBlurValue(event.target.value)}}
                        ></input>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "1rem",
                                color: "white",
                            }}
                        >
                            <span>0.1</span>
                            <span>100</span>
                        </div>
                    </div>
                    <div id="size-volume-container">
                        <label htmlFor="lego-size">Lego Size Volume ({sizeValue}) </label>
                        <input
                            type="range"
                            value={sizeValue}
                            id="lego-size-volume"
                            name="lego-size"
                            min={'20'}
                            max={'200'}
                            onChange={(event)=> {setSizeValue(event.target.value)}}
                        ></input>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "1rem",
                                color: "white",
                            }}
                        >
                            <span>20</span>
                            <span>200</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
