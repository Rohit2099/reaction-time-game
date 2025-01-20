import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
    const [data, setData] = useState([]);
    const [started, setStarted] = useState(false);
    const [location, setLocation] = useState({ "margin-left": "0px", "margin-top": "0px" });
    const [clicked, setClicked] = useState(false);
    const startTime = useRef(null);

    const intervalId = useRef(null);

    const onStart = () => {
        setStarted(true);
    };

    const onReaction = () => {
        if (started) {
            setClicked(true);
            renderRedObj();
            const reactionTime = (new Date().getTime() - startTime.current) / 1000;
            setData([...data, reactionTime]);
        }
    };

    const onPause = () => {
        setStarted(false);
    };

    const onReset = () => {
        setStarted(false);
        setData([]);
        setLocation({
            "margin-left": `0px`,
            "margin-top": `0px`,
        });
    };

    const renderRedObj = () => {
        const max_width = window.innerWidth;
        const max_height = 500;
        const dimenesion = 30;
        // 0 and 470px
        const newTop = Math.floor(Math.random() * (max_height - dimenesion));
        const newLeft = Math.floor(Math.random() * (max_width - dimenesion));
        setLocation({
            "margin-left": `${newLeft}px`,
            "margin-top": `${newTop}px`,
        });
    };

    useEffect(() => {
        if (started) {
            const redObjDelay = Math.random() * 2000 + 1000; //delay between 1 and 10s

            intervalId.current = setTimeout(() => {
                renderRedObj();
            }, redObjDelay);
            startTime.current = new Date().getTime();
        }

        return () => {
            clearTimeout(intervalId.current);
        };
    }, [started, clicked, location["margin-left"], location["margin-top"]]);

    return (
        <>
            <div id="header">
                <button id="start" onClick={onStart}>
                    Start
                </button>
                <button id="pause" onClick={onPause}>
                    Pause
                </button>
                <button id="reset" onClick={onReset}>
                    Reset
                </button>
            </div>
            <div id="content">
                <div id="playarea">
                    <div id="redObj" style={{ ...location }} onClick={onReaction} />
                </div>
                <div id="data">
                    <table>
                        <thead>
                            <tr>
                                <th>Mouse Click</th>
                                <th>Reaction time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((reacttime, idx) => {
                                return (
                                    <tr>
                                        <td>{idx + 1}</td>
                                        <td>{reacttime} seconds</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
