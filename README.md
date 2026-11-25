[![make.fun · u-deysumbrella-the-excuse-my-agent-gave-me-54acad85](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/Kodoku05/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/Kodoku05/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

# Executive Quarantine

A straight-faced excuse for a missed deadline, written for make.fun's **The Excuse My Agent Gave Me** bounty. The agent takes its prompt-injection defenses a little too seriously.

The root `main.ts` runs on Node 22.18 or later using only the standard library. It validates one nonblank line of 1–200 Unicode code points before writing UTF-8 text to `entry.txt`, without a trailing newline. It uses no network and reads no environment variable except `MAKEFUN_OUTPUT_DIR`.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The default output directory is `/output`. An invalid line or a failed write exits nonzero. `CANDIDATES.md` records the candidate workshop and selection rationale.
