# Advent of Code Leaderboard

Visualization of a private [Advent of Code](https://adventofcode.com) leaderboard: stars, scores and the time of every solved part.

## Environment variables

| Name | Required | Description |
|---|---|---|
| `SESSION` | yes | Value of the `session` cookie from adventofcode.com (without `session=`) |
| `AOC_YEAR` | no | Event year. By default: the current year in December, the previous year otherwise |

The leaderboard ID is set in `src/app/api/leaderboard/route.ts`.

## Development

```bash
npm install
SESSION=<cookie> npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The leaderboard is cached for 15 minutes, as Advent of Code asks not to request it more often.
