import { mkdirSync, writeFileSync } from "node:fs";

// One-line farewell a phone says as its battery hits 1 percent:
// it outlasted every drop, update and doomscroll — then one more video did it in.
const entry =
  "I survived every drop, every update, and 3 a.m. doomscrolls. What finally killed me was you opening one more video.";

const outDir = process.argv[2] ?? "/output";

// Gate self-check: the entry must be 1-199 UTF-8 characters, not only whitespace.
const chars = [...entry].length;
if (chars < 1 || chars > 199 || entry.trim().length === 0) {
  throw new Error(`entry fails the gate: ${chars} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
