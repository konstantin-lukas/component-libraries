import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: "",
    images: {
        unoptimized: true,
    },
    compilerOptions: {
        module: "ESNext",
        moduleResolution: "Bundler",
        skipLibCheck: true,
        paths: {
            "@/*": ["./src/*"]
        }
    }
};

export default nextConfig;