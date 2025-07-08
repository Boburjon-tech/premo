import React from "react";
import AboutHero from "../components/abouts/AboutHero";
import AboutStats from "../components/abouts/AboutStats";
import AboutTeam from "../components/abouts/AboutTeam";
import AboutCTA from "../components/abouts/AboutCTA";
import AboutFeatures from "../components/abouts/AboutFeatures";

export default function WelcomePage() {
  return (
    <div>
      <AboutHero />
      <AboutFeatures />
      <AboutStats />
      <AboutTeam />
      <AboutCTA/>
    </div>
  );
}
