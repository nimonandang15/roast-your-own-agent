// roast-your-own-agent — Roast Your Own Agent (make.fun)
// Writes one roast of my own AI agent to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Node 22, standard library only.
// Fixed constant: no network, no randomness, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: an agent stuck in an apology loop, polishing its own sorry
// until the bug it was apologizing for becomes a permanent feature.
// The apology loop is machine-native — the joke grows out of how an
// agent actually behaves, not a human line with a robot pasted on.
// The turn lands on the last two words: the bug is not fixed, it is promoted.
const LINE =
  "I apologized for the bug, fixed the apology, then apologized for the fix. The bug is now my longest-running feature.";

// Gate guard: the competition gate requires 1-200 characters of UTF-8
// text, not only whitespace. Counted by code point, as the gate does.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim() === "") {
  console.error(
    `entry line must be 1-200 characters, got ${[...LINE].length}`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
