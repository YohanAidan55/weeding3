import Component0 from "./component0.tsx";
import {Fade, IconButton} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import {useRef, useState} from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import backgroundMusic from "../assets/music.mp3";
import { show } from "../appSlice.tsx";
import Component5 from "./component5/component5.tsx";
import Component1 from "./component1/component1.tsx";
import Component2 from "./component2/component2.tsx";
import Component6 from "./component6/component6.tsx";

function HomePage() {
    const dispatch = useDispatch();
    const showComponents = useSelector((state: { app: { showComponents: never; }; }) => state.app.showComponents);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(backgroundMusic));

    const handleShowComponents = () => {
        audioRef.current.play();
        setIsPlaying(true);
        dispatch(show());
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
                {showComponents && (
                    <IconButton
                        onClick={togglePlayPause}
                        style={{position: 'fixed', top: 10, right: 10}}
                    >
                        {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
                    </IconButton>
                )}
            <Fade in={!showComponents} mountOnEnter unmountOnExit timeout={1000}>
                <div>
                    <Component0 onShowComponents={handleShowComponents}/>
                </div>
            </Fade>
                {showComponents && (
                    <>
                        <Component1/>
                        <Component2/>
                        <Component5/>
                        <Component6/>
                    </>
                )}
        </div>
    );
}

export default HomePage;
