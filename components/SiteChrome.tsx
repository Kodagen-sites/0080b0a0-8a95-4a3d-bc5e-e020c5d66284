"use client";

import FilmGrain from "@/components/motion/FilmGrain";
import Vignette from "@/components/motion/Vignette";
import ScrollProgress from "@/components/motion/ScrollProgress";

export default function SiteChrome() {
  return (
    <>
      <FilmGrain opacity={0.05} />
      <Vignette color="#0A0A0A" />
      <ScrollProgress color="#D4A35A" />
    </>
  );
}
