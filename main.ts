// One Word From Grandma — make.fun competition entry
// The word grandma would text about AI: she reads "AI" as a name — Al,
// the nice young man who knows everything, answers at once, and never
// stops talking. One word, nothing else.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "Al";

// The grader runs this program in a sandbox with an empty writable
// /output (MAKEFUN_OUTPUT_DIR); write the entry there when available.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (outDir) {
  try {
    writeFileSync(join(outDir, "entry.txt"), word, "utf8");
  } catch {
    // Fall back to stdout below; the word is still the entry.
  }
}
console.log(word);
