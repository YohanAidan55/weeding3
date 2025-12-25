import { useReward } from "partycles";

export function useFireworks(buttonId) {
    const { reward } = useReward(buttonId, "hearts", {
        "animationType": "hearts",
        "particleCount": 60,
        "spread": 70,
        "startVelocity": 12,
        "elementSize": 30,
        "lifetime": 180,
        "physics": {
            "gravity": 0.35,
            "wind": 0,
            "friction": 0.98
        },
        "effects": {
            "pulse": true
        },
        "colors": [
            "#ff1744",
            "#e91e63",
            "#ff4569",
            "#ff6b6b"
        ]
    });

    return reward;
}
