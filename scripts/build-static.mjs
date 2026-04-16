import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const distDir = resolve(root, "dist");

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

mkdirSync(distDir, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js"]) {
  cpSync(resolve(root, file), resolve(distDir, file));
}

console.log("Static build generated in dist/");
