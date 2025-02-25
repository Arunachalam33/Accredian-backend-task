import { useState } from "react";
import { Button } from "@mui/material";
import ReferModal from "./ReferModal";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Refer & Earn</h1>
      <p className="text-lg mb-6">Invite your friends and earn rewards!</p>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        Refer Now
      </Button>
      <ReferModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default HeroSection;
