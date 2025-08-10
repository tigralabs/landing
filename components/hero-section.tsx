"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  // const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.addEventListener("loadeddata", () => {
  //       setIsVideoLoaded(true);
  //       if (videoRef.current) {
  //         videoRef.current.currentTime = 2;
  //       }
  //     });
  //   }
  // }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mx-4">
      <div className="absolute inset-0">
        {/* <img
          src="/assets/tiger-bg.jpg"
          alt="Tiger Background"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-1 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary">BOOST</span> YOUR BUSINESS
              OPERATIONS
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              TigraLabs empowers businesses with cutting-edge IT services,
              resourcing, digitalization, and automation for seamless growth and
              innovation
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="font-medium bg-primary hover:bg-primary/90"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="/assets/tiger-comes.webp"
              alt="Digital Transformation"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isVideoLoaded ? "opacity-0" : "opacity-100"
              } absolute inset-0`}
            />
            <video
              ref={videoRef}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              } absolute inset-0`}
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/assets/tiger-walks-low.mp4" type="video/mp4" />
            </video>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
