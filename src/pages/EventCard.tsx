import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { motion, type MotionProps, type Transition } from "framer-motion";
import type {ReactNode} from "react";

// Définition des props du composant
interface EventCardProps {
    className?: string;
    cardClass?: string;
    initial?: MotionProps["initial"];
    animate?: MotionProps["animate"];
    transition?: Transition;
    title: string;
    subtitle?: string;
    subtitleSx?: SxProps<Theme>;
    children?: ReactNode;
    address?: string; // supportée mais non utilisée dans l'UI
    onItineraryClick?: () => void;
    button?: boolean;
    buttonLabel?: string;
}

const MotionDiv = motion.div;

const EventCard: React.FC<EventCardProps> = ({
                                                 className = "",
                                                 cardClass = "",
                                                 initial = { opacity: 0, y: 30 },
                                                 animate = { opacity: 1, y: 0 },
                                                 transition = { duration: 1 },
                                                 title,
                                                 subtitle,
                                                 subtitleSx = {},
                                                 children,
                                                 onItineraryClick,
                                                 button = true,
                                                 buttonLabel = "Voir l'itinéraire",
                                             }) => {
    return (
        <Box className={className}>
            <Card className={cardClass}>
                <CardContent>
                    <MotionDiv initial={initial} animate={animate} transition={transition}>
                        <Typography
                            variant="h5"
                            sx={{ color: "var(--color-primary)", fontFamily: "Cormorant Upright, serif",
                                paddingBottom: "15px",
                                textTransform: "uppercase",
                                fontWeight: "normal",
                                borderBottom: "1px solid rgba(164, 130, 48, 0.2);",
                                borderColor: "darkgoldenrod"}}
                        >
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography
                                variant="h4"
                                sx={{
                                    ...subtitleSx,
                                    color: "var(--color-primary)",
                                    fontFamily: "cursive",
                                    fontWeight: "400",
                                    fontStyle: "normal",
                                    marginTop: "20px",
                                    marginBottom: "20px"
                                }}
                                gutterBottom
                            >
                                {subtitle}
                            </Typography>
                        )}
                        {children}
                        {button && (
                            <Button
                                variant="outlined"
                                sx={{ mt: 4, color: "var(--color-primary)", borderColor: "var(--color-primary)" }}
                                onClick={onItineraryClick}
                            >
                                {buttonLabel}
                            </Button>
                        )}
                    </MotionDiv>
                </CardContent>
            </Card>
        </Box>
    );
};

export default EventCard;