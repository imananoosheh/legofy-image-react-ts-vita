import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const imgWidth = 1350;
    const imgHeight = 1080;
    const [blurValue, setBlurValue] = useState("8");
    const [sizeValue, setSizeValue] = useState("50");
    const [bgImage, setBgImage] = useState("");

    function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files !== null) {
            console.log(
                event.target.files,
                URL.createObjectURL(event.target.files[0])
            );
            setBgImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    useEffect(() => {}, [blurValue]);

    return (
        <div className="App">
            <div
                id="main-container"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <div
                    style={{
                        maxWidth: "500px",
                    }}
                >
                    <img src={bgImage} alt="" style={{ maxWidth: "100%" }} />
                    <div id="lego-overlay-container"></div>
                </div>
                <div style={{ maxWidth: "500px" }}>
                    <div id="image-input-container">
                        <input
                            type="file"
                            name="image-upload-field"
                            id="image-upload-field"
                            onChange={(event) => {
                                if (event.target.files) {
                                    console.log(
                                        event.target.files,
                                        URL.createObjectURL(
                                            event.target.files[0]
                                        )
                                    );
                                    setBgImage(
                                        URL.createObjectURL(
                                            event.target.files[0]
                                        )
                                    );
                                }
                            }}
                        />
                    </div>
                    <div id="blur-volume-container">
                        <label htmlFor="volume">
                            Blur Volume ({blurValue})
                        </label>
                        <input
                            type="range"
                            value={blurValue}
                            id="blur-volume"
                            name="volume"
                            min={"0.1"}
                            max={"100"}
                            step={"0.1"}
                            onChange={(event) => {
                                setBlurValue(event.target.value);
                            }}
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
                        <label htmlFor="lego-size">
                            Lego Size Volume ({sizeValue}){" "}
                        </label>
                        <input
                            type="range"
                            value={sizeValue}
                            id="lego-size-volume"
                            name="lego-size"
                            min={"20"}
                            max={"200"}
                            step={"1"}
                            onChange={(event) => {
                                setSizeValue(event.target.value);
                            }}
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
