import React from "react";
import {z} from "zod"

const LegoCanvasSchemaObject = z.object({
  draw: z.any(),
  height: z.number(),
  width: z.number(),
})
type LegoCanvasSchema = z.infer<typeof LegoCanvasSchemaObject>


const LegoCanvas = ({ draw, height, width }: LegoCanvasSchema) => {
    const canvas = React.useRef(document.createElement('canvas'));
    React.useEffect(() => {
        const context = canvas.current.getContext("2d");
        draw(context);
    });

    return <canvas ref={canvas} height={height} width={width} />;
};


export default LegoCanvas;