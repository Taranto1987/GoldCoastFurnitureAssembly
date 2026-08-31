import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(new URL("..", import.meta.url).pathname);
const outputDirectory = resolve(projectRoot, "out");
const deployDirectory = resolve(projectRoot, "dist");

await rm(deployDirectory, { recursive: true, force: true });
await mkdir(deployDirectory, { recursive: true });
await cp(outputDirectory, deployDirectory, { recursive: true });

console.log(`Static deployment output prepared at ${deployDirectory}`);
