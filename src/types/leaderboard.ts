export interface StarCompletion {
  get_star_ts: number;
  star_index: number;
}

export interface DayCompletion {
  "1"?: StarCompletion;
  "2"?: StarCompletion;
}

export interface Member {
  id: number;
  name: string | null;
  stars: number;
  local_score: number;
  last_star_ts: number;
  completion_day_level: Record<string, DayCompletion>;
}

export interface LeaderboardData {
  event: string;
  num_days: number;
  members: Record<string, Member>;
  owner_id: number;
  day1_ts: number;
}

