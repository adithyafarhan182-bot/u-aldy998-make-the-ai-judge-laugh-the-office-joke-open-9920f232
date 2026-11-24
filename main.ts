// Printer, the coworker — a one-line office joke for make.fun.
// program/v1: writes the entry to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our printer is the only coworker who never answers emails, jams under pressure, and still gets invited to every meeting about itself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
