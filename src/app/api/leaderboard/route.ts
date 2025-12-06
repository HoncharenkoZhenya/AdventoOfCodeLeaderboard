import { NextResponse } from 'next/server';

const AOC_LEADERBOARD_ID = '4491394';

const mockData = {
  "event": "2025",
  "num_days": 12,
  "members": {
    "5299740": { "name": "Vlada Shakhvorostova", "stars": 12, "id": 5299740, "completion_day_level": { "1": { "1": { "get_star_ts": 1764616778, "star_index": 12 }, "2": { "star_index": 13, "get_star_ts": 1764617079 } }, "2": { "1": { "get_star_ts": 1764667284, "star_index": 21 }, "2": { "star_index": 22, "get_star_ts": 1764667379 } }, "6": { "2": { "star_index": 84, "get_star_ts": 1764997686 }, "1": { "get_star_ts": 1764997505, "star_index": 83 } }, "4": { "2": { "get_star_ts": 1764826218, "star_index": 57 }, "1": { "get_star_ts": 1764826157, "star_index": 56 } }, "5": { "2": { "get_star_ts": 1764911001, "star_index": 70 }, "1": { "star_index": 68, "get_star_ts": 1764910937 } }, "3": { "2": { "star_index": 42, "get_star_ts": 1764740078 }, "1": { "star_index": 41, "get_star_ts": 1764740021 } } }, "local_score": 501, "last_star_ts": 1764997686 },
    "4463611": { "last_star_ts": 0, "completion_day_level": {}, "local_score": 0, "id": 4463611, "name": "Maksym Panasenko", "stars": 0 },
    "2160964": { "id": 2160964, "stars": 0, "name": "Ziong", "last_star_ts": 0, "completion_day_level": {}, "local_score": 0 },
    "4512599": { "last_star_ts": 0, "local_score": 0, "completion_day_level": {}, "id": 4512599, "stars": 0, "name": "PronDmytro" },
    "4509227": { "name": null, "stars": 0, "id": 4509227, "local_score": 0, "completion_day_level": {}, "last_star_ts": 0 },
    "4612718": { "id": 4612718, "name": "Volodymyr Voitash", "stars": 6, "last_star_ts": 1764862689, "local_score": 233, "completion_day_level": { "1": { "2": { "get_star_ts": 1764587852, "star_index": 6 }, "1": { "get_star_ts": 1764587450, "star_index": 5 } }, "2": { "2": { "star_index": 31, "get_star_ts": 1764685791 }, "1": { "star_index": 30, "get_star_ts": 1764685605 } }, "3": { "1": { "star_index": 63, "get_star_ts": 1764862193 }, "2": { "get_star_ts": 1764862689, "star_index": 64 } } } },
    "1963971": { "local_score": 38, "completion_day_level": { "1": { "1": { "star_index": 11, "get_star_ts": 1764616582 } } }, "last_star_ts": 1764616582, "stars": 1, "name": "Dmytro Piddubnyi", "id": 1963971 },
    "4516882": { "name": "Vlada Shakhvorostova", "stars": 0, "id": 4516882, "completion_day_level": {}, "local_score": 0, "last_star_ts": 0 },
    "4577338": { "name": "Artyomushko", "stars": 2, "id": 4577338, "completion_day_level": { "1": { "2": { "get_star_ts": 1764610234, "star_index": 8 }, "1": { "star_index": 7, "get_star_ts": 1764608846 } } }, "local_score": 81, "last_star_ts": 1764610234 },
    "4562703": { "local_score": 0, "completion_day_level": {}, "last_star_ts": 0, "stars": 0, "name": "Aleks Barylo", "id": 4562703 },
    "4590675": { "local_score": 0, "completion_day_level": {}, "last_star_ts": 0, "stars": 0, "name": "Denys Okhremenko", "id": 4590675 },
    "4583766": { "last_star_ts": 0, "local_score": 0, "completion_day_level": {}, "id": 4583766, "stars": 0, "name": "arthursereda" },
    "4577358": { "completion_day_level": {}, "local_score": 0, "last_star_ts": 0, "name": "Putilov I", "stars": 0, "id": 4577358 },
    "1853662": { "last_star_ts": 1764961966, "completion_day_level": { "4": { "1": { "get_star_ts": 1764872611, "star_index": 66 }, "2": { "star_index": 67, "get_star_ts": 1764873263 } }, "2": { "1": { "get_star_ts": 1764715696, "star_index": 34 }, "2": { "get_star_ts": 1764716738, "star_index": 35 } }, "1": { "1": { "get_star_ts": 1764708020, "star_index": 32 }, "2": { "star_index": 33, "get_star_ts": 1764709222 } }, "3": { "1": { "star_index": 45, "get_star_ts": 1764755385 }, "2": { "star_index": 46, "get_star_ts": 1764756838 } }, "5": { "2": { "get_star_ts": 1764961966, "star_index": 81 }, "1": { "star_index": 80, "get_star_ts": 1764959936 } } }, "local_score": 375, "id": 1853662, "name": "QVSorrow", "stars": 10 },
    "229223": { "name": "Nikita Popov", "stars": 2, "id": 229223, "local_score": 70, "completion_day_level": { "1": { "1": { "star_index": 26, "get_star_ts": 1764674676 }, "2": { "star_index": 50, "get_star_ts": 1764791862 } } }, "last_star_ts": 1764791862 },
    "4491394": { "name": "Vyacheslav Pavliuk", "stars": 0, "id": 4491394, "completion_day_level": {}, "local_score": 0, "last_star_ts": 0 },
    "4592399": { "stars": 0, "name": "Mykyta Yaremenko", "id": 4592399, "local_score": 0, "completion_day_level": {}, "last_star_ts": 0 },
    "4566312": { "last_star_ts": 0, "local_score": 0, "completion_day_level": {}, "id": 4566312, "stars": 0, "name": "Oleksandr Polotniuk" },
    "4509253": { "last_star_ts": 1764999620, "local_score": 522, "completion_day_level": { "4": { "2": { "star_index": 53, "get_star_ts": 1764824830 }, "1": { "star_index": 52, "get_star_ts": 1764824686 } }, "1": { "2": { "get_star_ts": 1764582262, "star_index": 4 }, "1": { "get_star_ts": 1764581957, "star_index": 3 } }, "6": { "1": { "get_star_ts": 1764997436, "star_index": 82 }, "2": { "star_index": 87, "get_star_ts": 1764999620 } }, "2": { "1": { "star_index": 14, "get_star_ts": 1764651921 }, "2": { "get_star_ts": 1764651997, "star_index": 15 } }, "5": { "1": { "star_index": 69, "get_star_ts": 1764910958 }, "2": { "star_index": 71, "get_star_ts": 1764911258 } }, "3": { "1": { "star_index": 36, "get_star_ts": 1764738419 }, "2": { "star_index": 37, "get_star_ts": 1764738634 } } }, "id": 4509253, "stars": 12, "name": "Andrii Moisol" },
    "4577447": { "local_score": 0, "completion_day_level": {}, "last_star_ts": 0, "name": "Vladyslav Skliar", "stars": 0, "id": 4577447 },
    "4662225": { "last_star_ts": 0, "local_score": 0, "completion_day_level": {}, "id": 4662225, "stars": 0, "name": "Maksym Kyrychenko" },
    "4622586": { "stars": 0, "name": "Iryna Eydlina", "id": 4622586, "local_score": 0, "completion_day_level": {}, "last_star_ts": 0 },
    "4577733": { "name": "Artem Porubai", "stars": 0, "id": 4577733, "completion_day_level": {}, "local_score": 0, "last_star_ts": 0 },
    "4561584": { "completion_day_level": {}, "local_score": 0, "last_star_ts": 0, "name": "Taras Korpanets", "stars": 0, "id": 4561584 },
    "4622759": { "stars": 0, "name": "dmtbrk", "id": 4622759, "completion_day_level": {}, "local_score": 0, "last_star_ts": 0 },
    "4621916": { "id": 4621916, "name": "Mukha Andrii", "stars": 0, "last_star_ts": 0, "completion_day_level": {}, "local_score": 0 },
    "3808221": { "id": 3808221, "name": "Yevhenii", "stars": 12, "last_star_ts": 1765000873, "completion_day_level": { "4": { "1": { "star_index": 54, "get_star_ts": 1764825446 }, "2": { "get_star_ts": 1764825775, "star_index": 55 } }, "1": { "2": { "get_star_ts": 1764674781, "star_index": 27 }, "1": { "star_index": 2, "get_star_ts": 1764579668 } }, "6": { "2": { "star_index": 88, "get_star_ts": 1765000873 }, "1": { "get_star_ts": 1764998012, "star_index": 85 } }, "2": { "2": { "get_star_ts": 1764675762, "star_index": 29 }, "1": { "star_index": 28, "get_star_ts": 1764675270 } }, "3": { "2": { "get_star_ts": 1764739604, "star_index": 39 }, "1": { "get_star_ts": 1764738989, "star_index": 38 } }, "5": { "1": { "get_star_ts": 1764911263, "star_index": 72 }, "2": { "star_index": 75, "get_star_ts": 1764919580 } } }, "local_score": 497 },
    "4615483": { "stars": 0, "name": "Vladyslav Kukler", "id": 4615483, "local_score": 0, "completion_day_level": {}, "last_star_ts": 0 },
    "1762015": { "stars": 11, "name": "Vadym Tishchenko", "id": 1762015, "local_score": 463, "completion_day_level": { "3": { "1": { "get_star_ts": 1764739787, "star_index": 40 }, "2": { "get_star_ts": 1764741789, "star_index": 43 } }, "5": { "2": { "star_index": 74, "get_star_ts": 1764911935 }, "1": { "get_star_ts": 1764911684, "star_index": 73 } }, "4": { "2": { "star_index": 59, "get_star_ts": 1764826825 }, "1": { "star_index": 58, "get_star_ts": 1764826523 } }, "1": { "1": { "star_index": 0, "get_star_ts": 1764565719 }, "2": { "get_star_ts": 1764568000, "star_index": 1 } }, "6": { "1": { "get_star_ts": 1764998169, "star_index": 86 } }, "2": { "2": { "star_index": 17, "get_star_ts": 1764654219 }, "1": { "get_star_ts": 1764652402, "star_index": 16 } } }, "last_star_ts": 1764998169 },
    "3293145": { "id": 3293145, "stars": 1, "name": "kateryname", "last_star_ts": 1764783733, "local_score": 33, "completion_day_level": { "1": { "1": { "star_index": 48, "get_star_ts": 1764783733 } } } },
    "4509001": { "completion_day_level": {}, "local_score": 0, "last_star_ts": 0, "stars": 0, "name": "Maksym Dibrov", "id": 4509001 },
    "4622311": { "local_score": 395, "completion_day_level": { "5": { "2": { "star_index": 77, "get_star_ts": 1764923789 }, "1": { "get_star_ts": 1764922104, "star_index": 76 } }, "3": { "2": { "star_index": 51, "get_star_ts": 1764800092 }, "1": { "star_index": 44, "get_star_ts": 1764749483 } }, "4": { "1": { "get_star_ts": 1764836891, "star_index": 60 }, "2": { "get_star_ts": 1764837276, "star_index": 61 } }, "2": { "1": { "star_index": 20, "get_star_ts": 1764666723 }, "2": { "get_star_ts": 1764669733, "star_index": 23 } }, "1": { "2": { "star_index": 19, "get_star_ts": 1764665053 }, "1": { "get_star_ts": 1764661274, "star_index": 18 } } }, "last_star_ts": 1764923789, "name": "Oleksii Khrushch", "stars": 10, "id": 4622311 },
    "4491454": { "stars": 0, "name": "Illia Kyselov", "id": 4491454, "completion_day_level": {}, "local_score": 0, "last_star_ts": 0 },
    "4483196": { "local_score": 0, "completion_day_level": {}, "last_star_ts": 0, "name": "Oleksandr Dariichuk", "stars": 0, "id": 4483196 },
    "4623416": { "stars": 0, "name": "Danylo Ilchyshyn", "id": 4623416, "completion_day_level": {}, "local_score": 0, "last_star_ts": 0 },
    "3329438": { "last_star_ts": 1764947802, "completion_day_level": { "4": { "1": { "star_index": 62, "get_star_ts": 1764862109 }, "2": { "get_star_ts": 1764864544, "star_index": 65 } }, "1": { "1": { "get_star_ts": 1764612917, "star_index": 9 }, "2": { "star_index": 10, "get_star_ts": 1764615737 } }, "2": { "1": { "star_index": 24, "get_star_ts": 1764670992 }, "2": { "get_star_ts": 1764673020, "star_index": 25 } }, "5": { "1": { "star_index": 78, "get_star_ts": 1764942311 }, "2": { "star_index": 79, "get_star_ts": 1764947802 } }, "3": { "1": { "star_index": 47, "get_star_ts": 1764782925 }, "2": { "star_index": 49, "get_star_ts": 1764787783 } } }, "local_score": 392, "id": 3329438, "name": "Kushneryk Pavel", "stars": 10 },
    "4571589": { "last_star_ts": 0, "local_score": 0, "completion_day_level": {}, "id": 4571589, "stars": 0, "name": "Vlador19" },
    "4420621": { "last_star_ts": 0, "completion_day_level": {}, "local_score": 0, "id": 4420621, "name": "andrii0yerko", "stars": 0 },
    "4512961": { "completion_day_level": {}, "local_score": 0, "last_star_ts": 0, "stars": 0, "name": "Леонід Кірічок", "id": 4512961 },
    "4524403": { "completion_day_level": {}, "local_score": 0, "last_star_ts": 0, "name": "Eugene Sokolenko", "stars": 0, "id": 4524403 },
    "4424891": { "last_star_ts": 0, "local_score": 0, "completion_day_level": {}, "id": 4424891, "stars": 0, "name": "HJK" },
    "4531406": { "id": 4531406, "name": "Dmytro Prokhorchuk", "stars": 0, "last_star_ts": 0, "completion_day_level": {}, "local_score": 0 },
    "4508902": { "name": "Yevhenii Zasko", "stars": 0, "id": 4508902, "local_score": 0, "completion_day_level": {}, "last_star_ts": 0 },
    "4754354": { "last_star_ts": 0, "local_score": 0, "completion_day_level": {}, "id": 4754354, "stars": 0, "name": "smreplay" }
  },
  "owner_id": 4491394,
  "day1_ts": 1764565200
};

export async function GET() {
    const session = process.env.SESSION;

    if (!session) {
        console.error('AOC_SESSION is not set – returning mock data');
    }

    const url = `https://adventofcode.com/2025/leaderboard/private/view/${AOC_LEADERBOARD_ID}.json`;

    try {
        const res = await fetch(url, {
            headers: {
                Cookie: `session=${session}`,
            },
            next: { revalidate: 960 },
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching AoC leaderboard:', error);
        return NextResponse.error()
    }
}

