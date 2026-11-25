import { mkdirSync, writeFileSync } from "node:fs";

// A warning label for a time machine.
const label = "CAUTION: Avoid all contact with your past self. You were not as nice as you remember.";

const chars = [...label].length;
if (chars < 1 || chars > 120) throw new Error(`label is ${chars} characters; the limit is 120`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, label);
