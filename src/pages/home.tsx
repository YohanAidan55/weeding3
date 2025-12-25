import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import backgroundMusic from "../assets/music.mp3";
import { show } from "../appSlice.tsx";
import Component0 from "./component0.tsx";
import Component1 from "./component1/component1.tsx";
import Component2 from "./component2/component2.tsx";
import Component5 from "./component5/component5.tsx";
import Component6 from "./component6/component6.tsx";
import { motion, AnimatePresence } from "framer-motion";

function HomePage() {
    const dispatch = useDispatch();
    const showComponents = useSelector((state: { app: { showComponents: boolean; }; }) => state.app.showComponents);
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
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Bouton play/pause */}
            {showComponents && (
                <IconButton
                    onClick={togglePlayPause}
                    style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}
                >
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
            )}

            {/* Transition fluide entre Component0 et le reste */}
            <AnimatePresence>
                {!showComponents && (
                    <motion.div
                        key="component0"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{ position: 'absolute', width: '100%' }}
                    >
                        <Component0 onShowComponents={handleShowComponents} />
                    </motion.div>
                )}
            </AnimatePresence>

            {showComponents && (
                <motion.div
                    key="components"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Component1 />
                    <Component2 />
                    <Component5 />
                    <Component6 />
                </motion.div>
            )}
        </div>
    );
}

export default HomePage;
