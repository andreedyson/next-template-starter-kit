import { TECH_STACKS } from "@/constants";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function TechStacksSection() {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Tech Stack Header */}
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-bold max-md:leading-none md:text-2xl lg:text-3xl">
            Powered by Modern Technology
          </h2>
          <p className="text-muted-foreground max-w-lg font-medium">
            Everything you need to build modern apps.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="w-full space-y-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACKS.map((tech, i) => (
              <Link
                key={i}
                href={tech.docs}
                target="_blank"
                className="group bg-background hover:bg-input cursor-pointer rounded-md border p-4 shadow-md duration-200 hover:scale-[102%]"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Image
                      src={tech.icon}
                      width={64}
                      height={64}
                      alt={tech.name}
                      className="size-10 rounded-md border-2 lg:size-12 xl:size-16"
                    />

                    <ExternalLink className="duration-200 group-hover:text-violet-600" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-sm font-bold md:text-base">
                      {tech.name}
                    </p>
                    <p className="text-muted-foreground text-xs leading-5 font-medium md:text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStacksSection;
