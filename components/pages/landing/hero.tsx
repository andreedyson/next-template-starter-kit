import { Button } from "@/components/ui/button";
import { SquareKanban } from "lucide-react";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section className="my-20 w-full">
      <div className="flex flex-col items-center gap-3">
        {/* Hero Title & Description */}
        <div className="flex flex-col items-center justify-center gap-1.5 text-center md:gap-3">
          <div className="flex items-center gap-1.5 rounded-full border px-5 py-2 shadow-lg">
            <SquareKanban size={14} strokeWidth={2} />
            <p className="text-sm font-semibold">Build Modern Web App Faster</p>
          </div>
          <h1 className="text-2xl font-bold max-md:leading-none md:text-3xl lg:text-5xl">
            Unlock Your Next.js Potential: <br /> Ready-to-Go Template
          </h1>
          <p className="text-muted-foreground max-w-lg leading-5 tracking-tight max-md:text-sm">
            Jumpstart your development with pre-configured tools, optimized
            performance, and a clean project structure.
          </p>
          <div className="mt-3 flex items-center gap-4">
            <Button className="w-[120px] md:w-[150px]">Get Started</Button>
            <Button className="w-[120px] md:w-[150px]" variant={"link"}>
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex w-[80%] items-center justify-center lg:w-full">
          <Image
            src={"/assets/template-hero.svg"}
            width={1000}
            height={700}
            alt="Template Hero"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
