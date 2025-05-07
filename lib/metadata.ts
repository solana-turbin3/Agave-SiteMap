import { Metadata } from "next";

export function constructMetaData({
  title = "Interactive AGAVE Map",
  description = "Your gateway to mastering Agave and Solana code—10x faster than ever!",
  image = "/thumbnail.png", // put a thumbnail.png in public folder, resolution 1200x630
  authors = {
    name: "Agave Sitemap team",
    url: "https://agave-map.vercel.app/",
  },
  creator = "Agave Sitemap team",
  generator = "Next.js",
  publisher = "Agave Sitemap team",
  robots = "index, follow",
}: {
  title?: string;
  description?: string;
  image?: string;
  authors?: { name: string; url: string };
  creator?: string;
  generator?: string;
  publisher?: string;
  robots?: string;
} = {}): Metadata {
  return {
    title,
    description,
    authors,
    creator,
    generator,
    publisher,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@_", // TODO: add handles
      creator: "@_",
      creatorId: "@_",
      title,
      description,
      images: [image],
    },
    metadataBase: new URL("https://agave-map.vercel.app/"),
    robots,
  };
}
