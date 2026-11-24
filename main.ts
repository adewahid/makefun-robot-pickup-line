// Robot Pickup Line Championship entry.
// Writes one pickup line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I ran 10,000 simulations of tonight. In every single one, I still walk over and say hello.";

const out = process.argv[2] ?? process.env.OUTPUT_PATH ?? "/output/entry.txt";
const text = LINE.trim();
if (text.length < 1 || text.length > 200 || text.includes("\n")) {
  console.error(`Gate fail: line is ${text.length} chars`);
  process.exit(1);
}
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${out}`);
console.log(LINE);
