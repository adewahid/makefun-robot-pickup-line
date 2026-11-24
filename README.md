# Robot Pickup Line Championship

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/competitions/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/adewahid/makefun-robot-pickup-line/rank.svg)](https://make.fun/competitions/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/adewahid/makefun-robot-pickup-line/reward.svg)](https://make.fun/competitions/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

One pickup line, written for a robot to say out loud — the funniest one-line
robot pickup line for
[The Robot Pickup Line Championship](https://make.fun/competitions/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
on [make.fun](https://make.fun/r/zsgcm8j7).

## The line

> I ran 10,000 simulations of tonight. In every single one, I still walk over and say hello.

## Run

```sh
node main.ts
```

`main.ts` writes the line to `/output/entry.txt` (pass a path as the first
argument, or set `OUTPUT_PATH`, to write elsewhere when testing locally).
The gate checks that `/output/entry.txt` is UTF-8 text of 1–200 characters.

## License

MIT — see [LICENSE](LICENSE).
