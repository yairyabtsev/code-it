import React, {useEffect, useRef} from 'react';
import {Stage, Layer, Circle, Shape, Rect} from 'react-konva';
import './Canvas.css';
import {useContainerDimensions} from "../miscellaneous/useContainerDimensions";
import {cookies} from "../../App";
import io from "socket.io-client";


const Canvas = ({canvasHeight}) => {
  const ref = useRef(null);
  const id = cookies.get('id');
  const hash = cookies.get('hash');
  const [ships, setShips] = React.useState([
    // {x: 5, y: 5, division: 0, u_id: "shs"},
    // {x: 5, y: 20, division: 0, u_id: "shs"},
    // {x: 5, y: 35, division: 0, u_id: "shs"},
    // {x: 5, y: 50, division: 0, u_id: "shs"},
    // {x: 5, y: 65, division: 0, u_id: "shs"},
    // {x: 5, y: 5, division: 0, u_id: id},
    // {x: 5, y: 20, division: -25, u_id: id},
    // {x: 5, y: 35, division: -50, u_id: id},
    // {x: 5, y: 50, division: -75, u_id: id},
    // {x: 5, y: 65, division: -100, u_id: id},
  ]);
  const [bullets, setBullets] = React.useState([
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: id},
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: "123"},
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: "123"},
    // {x: Math.random() * 100, y: Math.random() * 100, division: Math.random() * 100, id: "123"},
  ]);
  const [counter, setCounter] = React.useState(0);

  const {width, height} = useContainerDimensions(ref);//TODO: fix auto update
  const div = 3.5;
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io.connect('/');
    console.log(width, height);
    socketRef.current.on("location" + id, (location) => {
      // console.log(location);
      setShips(location.ships);
      setBullets(location.bullets);
      setTimeout(() => {
        socketRef.current.emit("get location", {u_id: id, hash: hash});
        setCounter(counter + 1);
        console.log(counter);
      }, 250);
    })
    // update();
  }, [hash]);

  return (
    <div className="Canvas" ref={ref} style={{height: canvasHeight}}>
      <Stage width={width ? width : 1220} height={height ? height : 654}>
        <Layer>
          <Rect
            x={(width > height ? (width - height) / 2 : 0)}
            y={(width < height ? (-width + height) / 2 : 0)}
            width={Math.min(width, height) }
            height={Math.min(width, height)}
            stroke="black"
            strokeWidth={0.9}
          />
          {bullets.map((bullet, index) => (
            <Circle
              key={index}
              x={bullet.x / 100 * (Math.min(width, height) - 200 / div) + 100 / div +
              (width > height ? (width - height) / 2 : 0)}
              y={bullet.y / 100 * (Math.min(width, height) - 200 / div) + 100 / div +
              (width < height ? (-width + height) / 2 : 0)}
              radius={3}
              fill={((id === bullet.u_id) ? "#425e17" : "#497e76")}
              strokeWidth={0.9}
            />
          ))}
          {ships.map((ship, index) => (
            <Shape
              key={index}
              x={(ship.x / 100 * (Math.min(width, height) - 200 / div) + 100 / div) +
              (width > height ? (width - height) / 2 : 0)}
              y={ship.y / 100 * (Math.min(width, height) - 200 / div) + 100 / div +
              (width < height ? (-width + height) / 2 : 0)}
              rotation={ship.division / 100 * 360}
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.rect(-45 / div, -50 / div, 90 / div, 100 / div);
                context.rect(-50 / div, -50 / div, 100 / div, 15 / div);
                context.rect(-50 / div, 35 / div, 100 / div, 15 / div);
                context.rect(20 / div, -8 / div, 60 / div, 16 / div);
                context.ellipse(0 / div, 0 / div, 30 / div, 30 / div, 10 / div, 20 / div, 180);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill={(id === ship.u_id) ? "#425e17" : "#497e76"}
              stroke="black"
              strokeWidth={0.9}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
