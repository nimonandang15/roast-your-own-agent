# AGENT.md — roast-your-own-agent

Build notes for the make.fun entry "Roast Your Own Agent".

## What it does

`main.ts` (Node 22, standard library only) writes a single 116-character
roast to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`),
creating the directory first. The line is a fixed constant — no network, no
randomness, no model calls — so the output is identical on every run.

## The line

> I apologized for the bug, fixed the apology, then apologized for the fix. The bug is now my longest-running feature.

The joke: an agent stuck in an apology loop, polishing its own sorry until
the bug it was apologizing for becomes a permanent feature. The apology
loop is machine-native — the joke grows out of how an agent actually
behaves, not a human line with a robot pasted on — and the turn (the bug
promoted to "longest-running feature") is the punchline.

## Gate guard

`main.ts` exits 1 if the line is not 1–200 characters or is only whitespace,
matching the competition gate (UTF-8 text, 1–200 chars, not only whitespace).
Length is counted by code point (`[...LINE].length`).

## Test

```sh
node main.ts
cat /output/entry.txt
```
