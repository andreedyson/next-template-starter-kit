import { Button } from "@/components/ui/button";
import config from "@/config";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CustomNotFoundPage() {
  return (
    <section className="bg-background text-base-content relative flex h-screen w-full flex-col items-center justify-center gap-4 p-4 md:p-10">
      <div>
        <Image
          src={"/assets/pages/not-found.illustration.svg"}
          width={400}
          height={400}
          alt="Not Found"
        />
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold md:text-3xl">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn&apos;t find the page you&apos;re looking for 😅.
        </p>
      </div>

      <Link href={config.appURL} passHref>
        <Button variant="link" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Go back to Home Page
        </Button>
      </Link>
    </section>
  );
}
