import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useState, useRef } from 'react';

export function Drawing({ color, clearLines }) {

    const isDrawing = useRef(false);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        //loadImage();
    }, [clearLines])
    
    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { points: [pos.x, pos.y] }]);
    };
    
    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
          return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
    
        // To draw line
        let lastLine = lines[lines.length - 1];
        
        if(lastLine) {
            // add point
            lastLine.points = lastLine.points.concat([point.x, point.y]);
                
            // replace last
            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.concat());
        }
        
    };
    
    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    return (
        <Stage
            width={document.documentElement.clientWidth - 30}
            height={document.documentElement.clientHeight - 30}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
        >
            <Layer>
                {lines.map((line, i) => (
                    <Line
                        key={i}
                        points={line.points}
                        stroke={color}
                        strokeWidth={5}
                        tension={0.5}
                        lineCap="round"
                        globalCompositeOperation={line.tool === 'eraser' ? 'destination-out' : 'source-over'}
                    />
                ))}
            </Layer>
        </Stage>
    )
}