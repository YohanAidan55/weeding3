
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
            title="Mariage civil"
            subtitle="Shirel & Alexandre"
            subtitleSx={{ color: "#d63384", fontFamily: "var(--font-title)" }}
            onItineraryClick={() => openWaze(address)}
        >
            <Typography variant="body1" gutterBottom>
                se diront<br /><strong>"Oui"</strong>
            </Typography>
            <Typography variant="h6" sx={{ color: "var(--color-primary)", mt: 2 }}>
                Mercredi 20 août 2024 à 16h30
            </Typography>
            <Typography variant="body1" mt={2}>
                à la mairie de Nogent-sur-Marne<br />
                Pl. Roland Nungesser,<br />
                94130 Nogent-sur-Marne
            </Typography>
            <Typography variant="body2" mt={4}>
                Un vin d'honneur et une réception henné<br />
                suivront la cérémonie à partir de 17h30<br />
                Au 3 rue de Patay,<br />
                94500 Champigny-sur-Marne
            </Typography>
        </EventCard>
    );
};

export default Component1;
