// Entry program for post-x-promote-make-your-own-bounty-01.
//
// The entry is one post on X. This program does exactly one job: copy
// POST.json (the post's address on X) from this repository into the
// grader's output directory. The house reads the post itself from X;
// nothing this program writes about the post is scored. The score is
// the post's replies + reposts + quotes at the deadline.
//
// Standard library only, no network. Every path resolves from this
// file's own location (import.meta.url), never from the working
// directory, because the grader runs with a different cwd.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

const sourcePath = join(here, "POST.json");
const raw = readFileSync(sourcePath, "utf8");
const post = JSON.parse(raw);

if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url field");
}

const xPost = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
const xWebPost = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/i\/web\/status\/\d+$/;
if (!xPost.test(post.url) && !xWebPost.test(post.url)) {
  throw new Error(`POST.json url is not an X post address: ${post.url}`);
}

mkdirSync(outDir, { recursive: true });
const targetPath = join(outDir, "POST.json");
copyFileSync(sourcePath, targetPath);
console.log(`POST.json copied to ${targetPath} for ${post.url}`);
