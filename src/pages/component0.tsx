import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { SaveTheDateCard } from "./component6/component6";

// @ts-ignore
export default function Component0({ onShowComponents }) {

    const handleClick = () => {
                onShowComponents();
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
                    sx={{ width: 0, boxShadow: 3, borderRadius: 2 }}
                />
            </motion.div>

            {/* Save the Date intégré */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ width: "100%" }}
            >
                <SaveTheDateCard
                    title="Mariage Shirel & Alexandre"
                    ctaLabel="Voir l’invitation"
                    onCtaClick={handleClick}
                    showSaveTheDateTitle={false}
                />
            </motion.div>
        </Box>
    );
}
