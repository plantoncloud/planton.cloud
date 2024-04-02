import { Metadata } from "next";

import Client from "./client";

export const metadata: Metadata = {
  title: "Planton Cloud",
  description: "Developer Portal",
};

export default function Home() {
  return <Client />;
}
