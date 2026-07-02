import { readFile, writeFile } from "node:fs/promises";

// script generates old legacy format from new edits

const trailStatus = JSON.parse(
  await readFile("trail-status.json", "utf8")
);

if (!Array.isArray(trailStatus.notices)) {
  throw new Error(
    'trail-status.json must contain a top-level "notices" array.'
  );
}

await writeFile(
  "official_notices-test-gen.json",
  `${JSON.stringify(trailStatus.notices, null, 2)}\n`
);
