import { useState, useEffect, useRef } from "react";
import { Box, Card, CardContent, Typography, type TypographyProps } from "@mui/material";
import { motion, useInView } from "framer-motion";
import "./component6.css";

// Countdown target date as a constant to avoid re-creating each render
const TARGET_DATE_MS = new Date(
    new Date("2026-05-10T00:00:00").toLocaleString("en-US", {
        timeZone: "Europe/Paris",
    })
).getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function clampTimeLeft(diffMs: number): TimeLeft {
  // If the date has passed, clamp all values to zero
  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diffMs / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diffMs / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diffMs / (1000 * 60)) % 60),
    seconds: Math.floor((diffMs / 1000) % 60),
  };
}

function getParisNowMs(): number {
    return new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/Paris" })
    ).getTime();
}

function calculateTimeLeft(): TimeLeft {
    const now = getParisNowMs();
    const diff = TARGET_DATE_MS - now;
    return clampTimeLeft(diff);
}

function useCountdown(): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(() => {
        const next = calculateTimeLeft();
        if (
          next.days === 0 &&
          next.hours === 0 &&
          next.minutes === 0 &&
          next.seconds === 0
        ) {
          clearInterval(timer);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

type AnimatedTypographyProps = TypographyProps & {
  children: React.ReactNode;
};

const AnimatedTypography = ({ children, variant, ...props }: AnimatedTypographyProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Typography variant={variant} {...props}>
        {children}
      </Typography>
    </motion.div>
  );
};

type TimeBlockProps = { label: string; value: number };

const TimeBlock = ({ label, value }: TimeBlockProps) => (
  <Box textAlign="center">
    <AnimatedTypography
      variant="h3"
      sx={{ fontFamily: "inherit", fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem" } }}
    >
      {value}
    </AnimatedTypography>
    <Typography
      variant="body1"
      fontWeight="bold"
      sx={{ fontFamily: "'Cormorant Upright', serif", fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
    >
      {label}
    </Typography>
  </Box>
);

type SaveTheDateCardProps = {
  title?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  showSaveTheDateTitle?: boolean; // afficher le titre "Save The Date"
};

export const SaveTheDateCard = ({
  title,
  ctaLabel,
  onCtaClick,
  showSaveTheDateTitle = true,
}: SaveTheDateCardProps) => {
  const timeLeft = useCountdown();

  return (
    <Card className="card6">
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          sx={{ fontFamily: "'Cormorant Upright', serif" }}
        >
          {title && (
            <AnimatedTypography
              variant="h5"
              fontWeight="bold"
              sx={{ fontSize: "1.5rem" }}
            >
              {title}
            </AnimatedTypography>
          )}
          {showSaveTheDateTitle && (
            <AnimatedTypography
              variant="h3"
              fontWeight="bold"
              sx={{ fontSize: { xs: "2rem", sm: "2.25rem", md: "2.5rem" } }}
            >
              Save The Date
            </AnimatedTypography>
          )}
          <AnimatedTypography
            variant="h5"
            fontWeight="bold"
            sx={{ fontSize: "1.5rem" }}
          >
            10.05.2026
          </AnimatedTypography>
          <Box display="flex" justifyContent="center" gap={2}>
            <TimeBlock label="Jours" value={timeLeft.days} />
            <TimeBlock label="Heures" value={timeLeft.hours} />
            <TimeBlock label="Minutes" value={timeLeft.minutes} />
            <TimeBlock label="Secondes" value={timeLeft.seconds} />
          </Box>

          {ctaLabel && (
            <Typography
              variant="body1"
              fontWeight="bold"
              onClick={onCtaClick}
              sx={{ fontSize: "1.5rem", cursor: "pointer" }}
            >
              {ctaLabel}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const Component6 = () => {
  return (
    <Box className="homePage6">
      <SaveTheDateCard />
    </Box>
  );
};

export default Component6;
