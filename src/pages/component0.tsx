import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
// @ts-ignore
import { useFireworks } from "../shared/useFireworks.js";


// @ts-ignore
export default function Component0({ onShowComponents }) {

    const reward = useFireworks("buttonId");

    const handleClick = () => {
        reward();              // 🎆 effet visuel
            setTimeout(() => {
                onShowComponents();
            }, 1500); // durée visible des fireworks
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                position: "relative",
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('assets/background0.jpg')",
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
                backgroundRepeat: "no-repeat, no-repeat",
            }}
        >
            {/* בס״ד */}
            <Typography
                variant="body2"
                sx={{
                    position: "fixed",
                    fontFamily: "sans-serif",
                    fontSize: "0.9rem",
                    zIndex: 100,
                    top: 10,
                    right: 20,
                    color: "black",
                }}
            >
                בס״ד
            </Typography>

            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    position: "absolute",
                    top: "50px",
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    component="img"
                    src="assets/logo.png"
                    alt="Logo"
                    sx={{ width: 220, boxShadow: 3, borderRadius: 2 }}
                />
            </motion.div>

            {/* Bandeau */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ width: "100%" }}
            >
                <Box
                    sx={{
                        backgroundColor: "#ada078",
                        py: 0.5,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "1.5rem",
                        }}
                    >
                        Mariage Shirel & Alexandre
                    </Typography>

                    {/* 🎆 Bouton avec effet */}
                    <span id="buttonId">
                        <Typography
                            variant="body1"
                            onClick={handleClick}
                            sx={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "1.5rem",
                                cursor: "pointer",
                            }}
                        >
                            Voir l’invitation
                        </Typography>
                    </span>
                </Box>
            </motion.div>
        </Box>
    );
}
