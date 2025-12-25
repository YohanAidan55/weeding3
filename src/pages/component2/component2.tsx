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
            title="Houppa & Réception"
            subtitle="Shirel & Alexandre"
            subtitleSx={{ fontFamily: "var(--font-title)", color: "var(--color-primary)", mb: 2 }}
            onItineraryClick={() => openWaze(address)}
        >
            <Typography variant="body1" gutterBottom>
                קוֹל שָׂשׂוֹן וְקוֹל שִׂמְחָה, קוֹל חָתָן וְקוֹל כַּלָּה
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", my: 2, fontSize: '14px', lineHeight: '1.5' }}>
                <div style={{textAlign: "left"}}>
                    Régis Vigier<br/>
                    Jacqueline Lasry<br/>
                    Sandrine et Cyril Vigier
                </div>
                <div style={{textAlign: "right"}}>
                    Danielle et René Parienti<br/>
                    Véronique et Fabrice Parienti
                </div>
            </Box>
            <Typography variant="h6" sx={{ color: "var(--color-primary)", mt: 2}}>
                ont la joie de vous faire part du mariage de leurs petits-enfants et enfants
            </Typography>
            <Typography variant="h5" sx={{ color: "var(--color-primary)", mt: 2, fontWeight: "bold"  }}>
                Dimanche 10 Mai 2026 à 16h30
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
                La Verrière 91<br />
                3 Rue Marie Marvingt,<br />
                91700, Fleury-Mérogis
            </Typography>
            <Typography variant="h6" sx={{ color: "var(--color-primary)", mt: 2, fontWeight: "bold"  }}>
                La cérémonie sera suivie d'une réception
            </Typography>
            <Typography variant="body2" sx={{display: "block", mt: 4, fontStyle: "italic"}}>
                Une pensée particulière pour nos grands-parents Joseph et Odette Flah,
                Albert Lasry, et Mercedes Vigier, qui veilleront sur nous en ce jour particulier.
            </Typography>
        </EventCard>
    );
};

export default Component2;
