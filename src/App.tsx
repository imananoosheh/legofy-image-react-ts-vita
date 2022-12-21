import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bgIMG from "./assets/img.jpg";
import "./App.css";
import LegoCanvas from "./components/LegoCanvas";

function App() {
    const CANVAS_SIZE = 1000
    const [count, setCount] = useState(0);

    function draw(canvasContext: CanvasRenderingContext2D) {
        const backgroundImage = new Image();
        backgroundImage.src = bgIMG
        const backgroundImageWidth = backgroundImage.width;
        const backgroundImageHeight = backgroundImage.height;
        canvasContext?.drawImage(
            backgroundImage,
            0,
            0,
            backgroundImageWidth,
            backgroundImageHeight
        );
    }

    return (
        <div className="App">
            <div id="main-container">
                <div id="upload-section" className="container-cell">
                    <button data-upload-button>Upload</button>
                </div>
                <div id="canvas-container" className="container-cell">
                    <LegoCanvas draw={draw} height={CANVAS_SIZE} width={CANVAS_SIZE} />
                </div>
                <div id="controller-output" className="container-cell">
                    <div className="controller-container">
                        <label htmlFor="lego-size">Lego Brick Size</label>
                        <input
                            type="range"
                            id="lego-size"
                            name="lego-size"
                            min="20"
                            max="80"
                            list="sizemarks"
                        ></input>
                        <datalist id="sizemarks">
                            <option value="20" label="20"></option>
                            <option value="40" label="40"></option>
                            <option value="80" label="80"></option>
                        </datalist>
                    </div>
                    <div className="controller-container">
                        <label htmlFor="blur-volume">Lego Blur Volume</label>
                        <input
                            type="range"
                            id="blur-volume"
                            name="blur-volume"
                            min="1"
                            max="120"
                            list="blurmarks"
                        ></input>
                        <datalist id="blurmarks">
                            <option value="0" label="0"></option>
                            <option value="60" label="60"></option>
                            <option value="120" label="120"></option>
                        </datalist>
                    </div>

                    <button data-download-button>Download</button>
                </div>
            </div>
        </div>
    );
}

export default App;
