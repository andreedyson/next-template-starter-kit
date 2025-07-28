import config from "@/config";
import { Metadata } from "next";

export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    ...{
      title: config.appName,
      description: config.appDescription,
      metadataBase: new URL(config.appURL),
      alternates: { canonical: config.appURL },
      openGraph: {
        title: config.appName,
        description: config.appDescription,
        url: config.appURL,
        siteName: config.appName,
        // Only enable if you add opengraph image
        // images: [
        //   {
        //     url: `${config.appURL}`,
        //     width: 1200,
        //     height: 630,
        //     alt: `${config.appName} preview image`,
        //   },
        // ],
        // type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: config.appName,
        description: config.appDescription,
        // Enable only if needed, and add more type to the types/config.ts accordingly
        // site: config.twitterHandle,
        // images: [`${config.appURL}${config.ogImage}`],
      },
    },
    ...overrides,
  };
}
