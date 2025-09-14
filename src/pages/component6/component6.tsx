import { useState, useEffect, useRef } from "react";
import {Box, Card, CardContent, Typography, type TypographyProps} from "@mui/material";
import { motion, useInView } from "framer-motion";
import "./component6.css";

// Countdown target date as a constant to avoid re-creating each render
const TARGET_DATE_MS = new Date("2026-05-10T00:00:00").getTime();

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

const Component6 = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = Date.now();
    const diff = TARGET_DATE_MS - now;
    return clampTimeLeft(diff);
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(() => {
        const now = Date.now();
        const next = clampTimeLeft(TARGET_DATE_MS - now);
        // Stop the interval once countdown reaches zero to avoid unnecessary updates
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

  return (
      <Box className="homePage6">
          <Card className="card6">
              <CardContent>
                  <AnimatedTypography variant="h4" fontWeight="bold" gutterBottom>
                    Save The Date
                  </AnimatedTypography>
                  <AnimatedTypography variant="h6">10 Mai 2026</AnimatedTypography>
                  <Box display="flex" justifyContent="center" gap={2} mt={2}>
                    <TimeBlock label="Jours" value={timeLeft.days} />
                    <TimeBlock label="Heures" value={timeLeft.hours} />
                    <TimeBlock label="Minutes" value={timeLeft.minutes} />
                    <TimeBlock label="Secondes" value={timeLeft.seconds} />
                  </Box>
              </CardContent>
          </Card>
    </Box>
  );
};

type TimeBlockProps = { label: string; value: number };

const TimeBlock = ({ label, value }: TimeBlockProps) => (
  <Box textAlign="center">
    <AnimatedTypography variant="h5" fontWeight="bold">
      {value}
    </AnimatedTypography>
    <Typography variant="body2">{label}</Typography>
  </Box>
);

export default Component6;
