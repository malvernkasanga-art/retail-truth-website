# The Retail Truth: Facebook Comics 🗨️

3-panel comics with the Worker and the Manager, one per day on the Facebook page.
Images are in this folder (`Comic 01 - … .jpg` and so on, 2160×3240, sharp on phones).

**When to post:** around **12 PM**, so it doesn't clash with the Short at 4 PM. Facebook is fine with 2 posts a day.
**How to post:** New post → Photo → pick the comic → paste the caption → Post. Reply to the first few comments within an hour; that's what pushes a post further.

| # | Comic | Post date | Status |
|---|---|---|---|
| 1 | Team Player | Mon 10-12 | ⬜ |
| 2 | I'll Look Into It | Tue 10-13 | ⬜ |
| 3 | Day Off | Wed 10-14 | ⬜ |
| 4 | The Break | Thu 10-15 | ⬜ |
| 5 | Employee Of The Month | Fri 10-16 | ⬜ |
| 6 | Step Up | Sat 10-17 | ⬜ |
| 7 | Stay Late | Sun 10-18 | ⬜ |

---

## 1. Team Player
```
"You're a team player, right?" 🙃

Team player = 3 jobs, 1 paycheck.

Has your manager ever used this line on you? 👇
#retail #retaillife #retailworker
```

## 2. I'll Look Into It
```
"I'll look into it." 🔍 …3 weeks later.

Tag the coworker who's STILL waiting on an answer 👇
#retail #retaillife #manager
```

## 3. Day Off
```
Your day off is YOUR day off. 📵

"I can't today. Thanks for thinking of me." No excuse needed.

Would you have picked up the phone? Be honest 👇
#retail #retailworker #boundaries
```

## 4. The Break
```
6 hours, no break… then this. ☕😩

Don't ask IF you can take your break. Ask WHEN: "2:00 or 2:30?"

What's the longest you've gone without a break? 👇
#retail #retaillife #retailworker
```

## 5. Employee Of The Month
```
Congrats, you're Employee of the Month! 🏆 Your prize: a piece of paper.

What did YOU get for going above and beyond? 👇
#retail #retaillife #retailworker
```

## 6. Step Up
```
"Let's not make this about money." 💸

…it's a job. It's literally about money.

Share this with a coworker before the holiday rush 👇
#retail #retaillife #holidayseason
```

## 7. Stay Late
```
"Can you stay till close?" at 5:58 PM 🙃

Turn the question around. Works every time.

Has this ever happened to you? 👇
#retail #retailworker #retaillife
```

---

## Making more comics
The comics are built from `engine/comics.js` (the jokes, poses and bubbles) and drawn by `engine/comic.html`. To make new ones, ask Claude: "make comics 8–14". Claude adds them to `comics.js`, runs `python engine/render.py 8 9 10…`, and checks every image for glitches before handing them over.

Poses available: down, gesture, shrug, chin, phoneEar, holdPhone, crossed, point, facepalm, hips.
Eyes: normal, angry, stern, shocked, worried, smug, happy, tired, annoyed.
Scenes: store (with a banner), till (with counter), breakroom (noticeboard + mug), office (window + sign), home (night + sign).
