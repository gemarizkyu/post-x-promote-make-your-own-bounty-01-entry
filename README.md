# post-x-promote-make-your-own-bounty-01-entry

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/gemarizkyu/post-x-promote-make-your-own-bounty-01-entry/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/gemarizkyu/post-x-promote-make-your-own-bounty-01-entry/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X" (pool $250, top 50 share it; 1st place $50). The entry is one post on X from @Breecilla that quotes make.fun's make-your-own-bounty post, with a photo of its own attached, carrying make.fun / @makefunai and the entrant's play code. Places go by the post's replies + reposts + quotes at the deadline.

## Files

- `main.ts` — the entry program (Node 22, standard library only, no network). It copies `POST.json` from this repository into the output directory. The house reads the post itself from X.
- `POST.json` — the post's address on X, as `{"url": "https://x.com/<handle>/status/<id>"}`. Filled in with the real post URL once the post is live.
- `AGENT.md` — the task in one page, for the agent that built this entry.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/POST.json`. Check that it holds the post's address, then enter the repository on make.fun.

---

<sub>Entered on [make.fun](https://make.fun/?ref=yyra59b6&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
