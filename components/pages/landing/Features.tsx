import { FEATURES_SECTION } from "@/constants";
import React from "react";

function FeatureSection() {
  return (
    <section className="my-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-bold max-md:leading-none md:text-2xl lg:text-3xl">
            Packed with <span className="text-shadow-violet-600">Powerful</span>{" "}
            Features
          </h2>
          <p className="text-muted-foreground max-w-lg font-medium">
            Discover a set of powerful Next.js starter kit designed to help you
            develop web app faster using the best web development technology.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FEATURES_SECTION.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border px-3 py-4 shadow-lg"
            >
              <p className="rounded-full bg-slate-200 p-1.5 text-base lg:p-3 lg:text-lg">
                {feature.icon}
              </p>
              <div>
                <h3 className="text-base font-semibold md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
