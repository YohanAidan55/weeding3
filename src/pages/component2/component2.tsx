import EventCard from "../EventCard";
import { Typography, Box } from "@mui/material";
import { openWaze } from "../../utils/navigation.ts";
import "./component2.css";

const Component2 = () => {
    const address = "13 avenue de Livry, 95340, Le Raincy";
    return (
        <EventCard
            className="homePage2"
            cardClass="card2"
            initial={{ opacity: 0, y: 30 }}
            title="Houppa"
            subtitle="Shirel & Alexandre"
            subtitleSx={{ fontFamily: "var(--font-title)", color: "var(--color-primary)", mb: 2 }}
            onItineraryClick={() => openWaze(address)}
        >
            <Typography variant="body1" gutterBottom>
                מצאתי את שאהבה נפשי
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", my: 2, fontSize: '10px' }}>
                <Typography sx={{textAlign: "left"}}>
                    Régis Vigier<br/>
                    Jacqueline Lasry<br/>
                    Sandrine et Cyril Vigier
                </Typography>
                <Typography sx={{textAlign: "right"}}>
                    <br/>
                    Danielle et René Parienti<br/>
                    Véronique et Fabrice Parienti
                </Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: "center", my: 2 , fontSize: '12px'}}>
                ont la joie de vous faire part du mariage de leurs petits-enfants et enfants
            </Typography>
            <Typography variant="h6" sx={{ color: "var(--color-primary)", mt: 2 }}>
                Mercredi 28 août 2024 à 17h30
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
                Château Barthélémy<br />
                78660, Paray-Douaville<br /><br />
                La cérémonie sera suivie d'une réception
            </Typography>
            <Typography variant="caption" sx={{display: "block", mt: 4, fontStyle: "italic"}}>
                Une pensée particulière pour nos grands-parents Joseph et Odette Flah,
                Albert Lasry, et Mercedes Vigier, qui veilleront sur nous en ce jour particulier.
            </Typography>
        </EventCard>
    );
};

export default Component2;
