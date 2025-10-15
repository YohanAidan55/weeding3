import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

// @ts-ignore
export default function Component0({ onShowComponents }) {
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
                    "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('./src/assets/background0.jpg')",
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
                backgroundRepeat: "no-repeat, no-repeat",
            }}
        >
            {/* בס״ד en haut à droite */}
            <Typography
                variant="body2"
                sx={{
                    position: "fixed",
                    fontFamily: "sans-serif", // police compatible hébreu
                    fontSize: "0.9rem",
                    zIndex: 100,
                    top: 10,
                    right: 20,
                    color: "black",
                }}
            >
                בס״ד
            </Typography>

            {/* Logo animé */}
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
                    src="./src/assets/logo.png" // mets ton logo papillon ici
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
                        backgroundColor: "#ada078", // bandeau semi-transparent
                        py: 0.5,
                        px: 0,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontFamily: "Cormorant Garamond, serif",
                            color: "white",
                            fontWeight: 500,
                        }}
                    >
                        MARIAGE SHIREL & ALEXANDRE
                    </Typography>
                    <Button
                        variant="text"
                        onClick={onShowComponents}
                        sx={{
                            color: "#ffffff",
                            fontFamily: "Cormorant Garamond, serif",
                            fontWeight: 500,
                            "&:hover": {
                                color: "#ffffff",
                            },
                        }}
                    >
                        Voir l’invitation
                    </Button>
                </Box>
            </motion.div>
        </Box>
    );
}