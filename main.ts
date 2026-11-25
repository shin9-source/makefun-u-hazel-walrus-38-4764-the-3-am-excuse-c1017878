import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Nope, it's 3 AM — my screen's asleep, my battery's at 2%, and the man who taped his seed phrase to the fridge is in no state to move money.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
