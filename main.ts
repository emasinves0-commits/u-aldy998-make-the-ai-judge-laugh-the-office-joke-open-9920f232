import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke for the Make the AI Judge Laugh: the Office Joke Open bounty.
const JOKE =
  "My performance review said 'exceeds expectations' \u2014 apparently the expectation was that I'd quit by March.";

// Gate: the entry must be 1–200 characters of non-whitespace UTF-8 text.
if ([...JOKE].length < 1 || [...JOKE].length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${[...JOKE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
