import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Le schéma Postgres est lu à l'exécution (src/lib/db.ts) pour créer les
  // tables au premier accès : il doit voyager avec les fonctions serveur.
  outputFileTracingIncludes: {
    "/**/*": ["./db/schema.sql"],
  },
};

export default nextConfig;
