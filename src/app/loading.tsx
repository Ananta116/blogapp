"use client"
import { motion } from "motion/react";

export default function Loading() {
    const ball = {
        width: 100,
        height: 100,
        backgroundColor: "#0000FF",
        borderRadius: "50%",
    }
  return (
    <div className="flex justify-center items-center mt-[25vh]">
      <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
        />
    </div>
  );
}
