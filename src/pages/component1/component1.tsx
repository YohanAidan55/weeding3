
import EventCard from "../EventCard";
import { Typography } from "@mui/material";
import "./component1.css";
import {openWaze} from "../../utils/navigation.ts"

const Component1 = () => {
    const address = "13 avenue de Livry, 95340, Le Raincy";
    return (
        <EventCard
            className="homePage1"
            cardClass="card1"
            initial={{ opacity: 0, y: 40 }}
            title="La Mairie"
            subtitle="Shirel & Alexandre"
            subtitleSx={{ color: "#d63384", fontFamily: "var(--font-title)" }}
            onItineraryClick={() => openWaze(address)}
        >
            <Typography variant="body1" gutterBottom>
                se diront <strong>"Oui"</strong>
            </Typography>
            <Typography variant="h6" sx={{ color: "var(--color-primary)", mt: 2 }}>
                Mercredi 20 août 2024 à 16h30
            </Typography>
            <Typography variant="body1" mt={2}  sx={{margin: "25px 0;"}} >
                Mairie de Nogent-sur-Marne<br />
                Pl. Roland Nungesser,<br />
                94130 Nogent-sur-Marne
            </Typography>
            <Typography sx={{ fontSize:"15px",color: "var(--color-primary)", mt: 2 }}>
                La Mairie sera suivie d'un vin d'honneur<br />
            </Typography>
            <Typography variant="body1" mt={2}  sx={{margin: "25px 0;"}}>
                Mairie de Nogent-sur-Marne<br />
                Pl. Roland Nungesser,<br />
                94130 Nogent-sur-Marne
            </Typography>
        </EventCard>
    );
};

export default Component1;
