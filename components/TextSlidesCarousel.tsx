"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarouselAutoplay from "embla-carousel-autoplay";

export function TextSlidesCarousel({
  slides,
  orientation = "horizontal",
}: {
  slides: { title: string; description: string }[];
  orientation?: "horizontal" | "vertical";
}) {
  const plugin = React.useRef(
    useEmblaCarouselAutoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={`w-full ${orientation === "vertical" ? "h-[400px]" : ""}`}
      opts={{
        align: "start",
        loop: true,
        axis: orientation === "vertical" ? "y" : "x",
      }}
      orientation={orientation}
    >
      <CarouselContent className={orientation === "vertical" ? "-mt-2" : ""}>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className={orientation === "vertical" ? "pt-2" : ""}
          >
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                {slide.title}
              </h2>
              <p className="text-xl text-white/90">{slide.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious
        className={`text-white border-white hover:bg-white/20 ${
          orientation === "vertical" ? "left-1/2 -translate-x-1/2 -top-12" : ""
        }`}
      />
      <CarouselNext
        className={`text-white border-white hover:bg-white/20 ${
          orientation === "vertical"
            ? "left-1/2 -translate-x-1/2 -bottom-12"
            : ""
        }`} 
      />*/}
    </Carousel>
  );
}
