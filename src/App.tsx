import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [blurValue, setBlurValue] = useState("8");
    const [sizeValue, setSizeValue] = useState("50");
    const [bgImage, setBgImage] = useState("");

    function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files !== null) {
            setBgImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const setBlur = (blurValue = 8) => {
        console.log(`blur value: ${blurValue}`);
        document.querySelectorAll(".lego-square").forEach((square) => {
            square.setAttribute(
                "style",
                `backdrop-filter : blur(${blurValue}px)`
            );
        });
    };

    function propagateLegos() {
        const legoOverlayContainer = document.querySelector(
            "#lego-overlay-container"
        );
        // Emptying the Lego Overlay Container from any remaining child
        if (legoOverlayContainer) {
            legoOverlayContainer.innerHTML = "";
        }
        // Grid Container config
        const gridNumOfColumn = Math.ceil(imgWidth / Number(sizeValue));
        const gridNumOfRow = Math.ceil(imgHeight / Number(sizeValue));
        const numberOfLego = gridNumOfColumn * gridNumOfRow;

        const legoAndImageMarginWidth =
            imgWidth - gridNumOfColumn * Number(sizeValue);
        const legoAndImageMarginHeight =
            imgHeight - gridNumOfRow * Number(sizeValue);
        // legoOverlayContainer?.setAttribute("style", `inset: ${legoAndImageMarginHeight} ${legoAndImageMarginWidth}`)
        // console.log(`inset: ${legoAndImageMarginHeight} ${legoAndImageMarginWidth}`)

        let brickList = [];

        for (let i = 0; i < numberOfLego; i++) {
            const legoBrick = document.createElement("div");
            legoBrick.classList.add("lego-brick");

            const legoSquare = document.createElement("div");
            legoSquare.classList.add("lego-square");

            const legoCircle = document.createElement("div");
            legoCircle.classList.add("lego-circle");

            legoBrick.appendChild(legoSquare);
            legoBrick.appendChild(legoCircle);

            brickList.push(legoBrick);
        }
        if (legoOverlayContainer) {
            const newStyle = `grid-template-columns:repeat(${gridNumOfColumn}, ${sizeValue}px);grid-template-rows:repeat(${gridNumOfRow}, ${sizeValue}px);inset: ${
                legoAndImageMarginHeight / 2
            }px ${legoAndImageMarginWidth / 2}px`;
            legoOverlayContainer.setAttribute("style", newStyle);
            // legoOverlayContainer.style['grid-template-columns'] = `repeat(${gridNumOfColumn}, ${sizeValue}px)`
            // legoOverlayContainer.style['grid-template-rows'] = `repeat(${gridNumOfRow}, ${sizeValue}px)`
            legoOverlayContainer.append(...brickList);
        }
    }

    useEffect(() => {
        if (bgImage !== null) {
            const newImage = new Image();
            newImage.src = bgImage;
            setTimeout(() => {
                let upImgWidth = newImage.naturalWidth;
                let upImgHeight = newImage.naturalHeight;
                console.log(newImage, upImgWidth, upImgHeight);
                setImgHeight(upImgHeight);
                setImgWidth(upImgWidth);
            }, 200);
        }
    }, [bgImage]);

    useEffect(() => {
        setTimeout(() => {
            propagateLegos();
        }, 200);
    }, [imgHeight, imgWidth]);

    useEffect(() => {
        setTimeout(() => {
            propagateLegos();
        }, 200);
        const legoBricks = document
            .querySelectorAll(".lego-brick")
            .forEach((brick) => {
                brick.setAttribute(
                    "style",
                    `width:${sizeValue}px;height:${sizeValue}px`
                );
                //TODO: continue from here
                // brick.firstChild.
                // setAttribute('style',`width:${sizeValue}px;height:${sizeValue}px`)
            });
    }, [sizeValue]);

    useEffect(() => {
        setTimeout(() => {
            setBlur(Number(blurValue));
        }, 100);
    }, [blurValue]);

    return (
        <div className="App">
            <div
                id="main-container"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    height: "100vh",
                    width: "100vw",
                    alignItems: "center",
                }}
            >
                <section
                    style={{
                        // maxWidth: "2000px",
                        // transform:"scale(0.5)",
                        position: "relative",
                    }}
                >
                    <img src={bgImage} data-uploaded-image alt="" />
                    <div id="lego-overlay-container"></div>
                </section>
                <div
                    style={{
                        height: "max(26vh, 20vw)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div id="image-input-container">
                        <input
                            type="file"
                            name="image-upload-field"
                            id="image-upload-field"
                            onChange={handleUpload}
                        />
                    </div>
                    <div id="blur-volume-container" style={{width: "100%"}}>
                        <label htmlFor="volume">
                            Blur Volume ({blurValue})
                        </label>
                        <br></br>
                        <input
                            style={{width: "100%"}}
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
                    <div id="size-volume-container" style={{width: "100%"}}>
                        <label htmlFor="lego-size">
                            Lego Size Volume ({sizeValue}){" "}
                        </label>
                        <br></br>
                        <input
                            style={{width: "100%"}}
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
