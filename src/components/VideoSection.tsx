"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import { Container } from "@/components/container";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="w-full bg-white py-12">
      <Container>
        <div className="mx-auto aspect-video max-w-[800px] overflow-hidden rounded-3xl border-[10px] border-brand-yellow">
          {playing ? (
            <iframe
              src="https://www.youtube.com/embed/7q7zqFm617Y?autoplay=1"
              title="The Missy Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url(/images/video-thumbnail.png)" }}
            >
              {/* The thumbnail image already bakes in its own flower play
                  button + scrub bar (see public/images/video-thumbnail.png) —
                  only the large centered play triangle is added here. */}
              <Play
                className="absolute top-1/2 left-1/2 size-[90px] -translate-x-1/2 -translate-y-1/2 fill-white/80 text-white/80"
              />
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
