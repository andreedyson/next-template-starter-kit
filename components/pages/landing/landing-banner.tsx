import { Button } from "@/components/ui/button";
import { Aperture, ExternalLink } from "lucide-react";
import React from "react";

function LandingBanner() {
  return (
    <section className="py-20">
      <div>
        <div className="relative rounded-lg border bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-white">
          <div>
            <div className="space-y-1.5">
              <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                What are you waiting for? <br className="max-md:hidden" /> Get
                started now!
              </h3>
              <p className="text-sm text-slate-200 md:max-w-sm md:text-base">
                Don&apos;t wait any longer, start your indie programming journey
                now faster with StartDash
              </p>
            </div>

            <div className="my-4 flex items-center gap-3 font-semibold md:my-12">
              <Button className="flex items-center gap-2">
                Get the Template <ExternalLink />
              </Button>
              <Button
                variant={"link"}
                className="items-center gap-2 text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="absolute -right-16 -bottom-12 hidden rotate-90 md:block">
            <Aperture size={400} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingBanner;
