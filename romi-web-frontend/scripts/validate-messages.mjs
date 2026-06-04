import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const messagesDir = path.join(root, "messages");
const locales = ["es", "en"];

function flatten(value, prefix = "") {
  return Object.entries(value).flatMap(([key, child]) => {
    const next = prefix ? `${prefix}.${key}` : key;
    return child && typeof child === "object" && !Array.isArray(child) ? flatten(child, next) : [next];
  });
}

const dictionaries = Object.fromEntries(
  locales.map((locale) => [
    locale,
    JSON.parse(fs.readFileSync(path.join(messagesDir, `${locale}.json`), "utf8")),
  ])
);

const expected = new Set(flatten(dictionaries.es));
let failed = false;

for (const locale of locales) {
  const keys = new Set(flatten(dictionaries[locale]));
  const missing = [...expected].filter((key) => !keys.has(key));
  const extra = [...keys].filter((key) => !expected.has(key));
  if (missing.length || extra.length) {
    failed = true;
    console.error(`${locale}: missing [${missing.join(", ")}], extra [${extra.join(", ")}]`);
  }
}

if (failed) process.exit(1);
console.log(`Translation dictionaries match: ${expected.size} keys across ${locales.join(", ")}.`);

