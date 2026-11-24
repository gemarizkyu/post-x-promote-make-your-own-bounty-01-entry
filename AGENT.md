# Agent task — post-x-promote-make-your-own-bounty-01

## The bounty

Promote make.fun's make-your-own-bounty post on X. Pool $250, top 50 share
it (1st $50, 2nd $30, 3rd $15, 4th–10th $5, 11th–50th $3). Entries close
27 Nov 2026 01:35 WIB (2026-11-26T18:35:00Z). One post per entrant.

## The entry

One post on X from the public account @Breecilla that:

- quotes make.fun's post https://x.com/makefunai/status/2124915864336236646
  (or links to it),
- carries a photo of its own, uploaded to the post itself,
- carries make.fun (a link or written out) and/or a tag of @makefunai,
- carries one of the entrant's play codes. Code 0:
  `makefun-portrait-hobby-crystal` (any of the account's 4 codes passes).
- includes the line `Make your own bounty on @makefunai:
  https://make.fun/sponsor/new` (it carries both make.fun and the tag).

Places go by the post's replies + reposts + quotes at the deadline.
Views and likes move nothing. Bought, botted, or self-made engagement
disqualifies. Keep the post up and public until the results are out.

## This repository

- `main.ts` — Node 22 program, standard library only, no network. It
  copies `POST.json` into the output directory. Run it with:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`. The
  post is made by the parent (via Buffer) after this build; the finisher
  replaces the placeholder with the real post URL before submitting.
- `README.md` — the entry's readme, with the 3 live make.fun badges.
- `LICENSE` — MIT.

## Rules that matter

- The post must be made between the opening (23 Nov 2026 18:35 UTC) and
  the deadline. A post made outside the window is refused.
- A reply, a plain repost, or a post with no photo of its own is no entry.
- Never ask anyone to repost the same thing many times, and never post
  the same update again and again.
- The program reads POST.json next to itself (import.meta.url), never
  from the working directory.
