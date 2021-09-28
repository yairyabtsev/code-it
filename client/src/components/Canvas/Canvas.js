import React, {useEffect, useRef} from 'react';
import {Stage, Layer, Circle, Shape} from 'react-konva';
import './Canvas.css';
import {useContainerDimensions} from "../miscellaneous/useContainerDimensions";
import {cookies} from "../../App";
import io from "socket.io-client";


const Canvas = ({canvasHeight}) => {
  const ref = useRef(null);
  const id = cookies.get('id');
  const hash = cookies.get('hash');
  const [ships, setShips] = React.useState([
    // {x: 50, y: 50, division: Math.random() * 100, id: id},
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: "123"},
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: "123"},
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: "123"},
  ]);
  const [bullets, setBullets] = React.useState([
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: id},
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: "123"},
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: "123"},
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: "123"},
  ]);
  const {width, height} = useContainerDimensions(ref);//TODO: fix auto update
  const div = 3.5;
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("location" + hash, (location) => {
      console.log(location);
      setShips(location.ships);
      setBullets(location.bullets);
    })
  }, [hash]);

  return (
    <div className="Canvas" ref={ref} style={{height: canvasHeight}}>
      <Stage width={width} height={height}>
        <Layer>
          {ships.map((ship) => (
            <Shape
              x={ship.x / 100 * (Math.min(width, height) - 200 / div) + 50 / div}
              y={ship.y / 100 * (Math.min(width, height) - 200 / div) + 50 / div}
              rotation={(ship.division % 100 + 100) % 100 / 100 * 360}
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.rect(5 / div, 0 / div, 90 / div, 100 / div);
                context.rect(0 / div, 0 / div, 100 / div, 15 / div);
                context.rect(0 / div, 85 / div, 100 / div, 15 / div);
                context.rect(70 / div, 42 / div, 50 / div, 16 / div);
                context.ellipse(50 / div, 50 / div, 30 / div, 30 / div, 10 / div, 20 / div, 180);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill={(id === ship.id) ? "#425e17" : "#497e76"}
              stroke="black"
              strokeWidth={0.9}
            />
          ))}
          {bullets.map((bullet) => (
            <Circle
              x={bullet.x / 100 * (Math.min(width, height) - 200 / div) + 100 / div + 100 / div}
              y={bullet.y / 100 * (Math.min(width, height) - 200 / div) + 100 / div}
              radius={3}
              fill={((id === bullet.id) ? "#425e17" : "#497e76")}
              strokeWidth={0.9}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
