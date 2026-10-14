// The Retail Truth Facebook comics. Each comic is 3 panels.
// chars: who (worker|manager), x, y (feet line, default below the frame), scale, flip, pose, eyes, look
// poses: down, gesture, shrug, chin, phoneEar, holdPhone, crossed, point, facepalm, hips
// eyes: normal, angry, stern, shocked, worried, smug, happy, tired, annoyed
// bubbles: text, x, y, w, to (index in chars), type (speech|thought|shout), side (-1|1 to force the tail side)
// Note: render.py reads "id: N, title: '...'" so keep titles in single quotes without apostrophes.
window.COMICS = [
  {
    id: 1, title: 'Team Player',
    panels: [
      {
        bg: { type: 'store', seed: 11 },
        chars: [
          { who: 'manager', x: 300, y: 600, scale: .9, pose: 'holdPhone', eyes: 'stern' },
          { who: 'worker', x: 800, y: 600, scale: .9, pose: 'down', eyes: 'normal', look: -6 },
        ],
        bubbles: [{ text: "We're short today, so I need you on the till, the floor AND the stockroom.", x: 24, y: 18, w: 560, to: 0 }],
      },
      {
        bg: { type: 'store', seed: 4, banner: "We're one big family!" },
        chars: [
          { who: 'worker', x: 330, y: 640, scale: 1.05, pose: 'shrug', eyes: 'shocked' },
          { who: 'manager', x: 860, y: 600, scale: .95, pose: 'crossed', eyes: 'smug', look: -6 },
        ],
        bubbles: [
          { text: 'At the same time?!', x: 20, y: 84, w: 290, to: 0 },
          { text: "You're a team player, right?", x: 560, y: 84, w: 330, to: 1 },
        ],
      },
      {
        bg: { type: 'breakroom', note: "We're one big family :)", noteX: 30, clockX: 560, vendX: 900 },
        chars: [{ who: 'worker', x: 640, y: 570, scale: .95, pose: 'chin', eyes: 'smug', look: 6 }],
        fg: { type: 'table', mug: 'Breaks are a myth', mugX: 880 },
        bubbles: [{ text: 'Sure! Is my paycheck a team player too?', type: 'thought', x: 330, y: 16, w: 360, to: 0 }],
      },
    ],
  },
  {
    id: 2, title: 'Ill Look Into It',
    panels: [
      {
        bg: { type: 'till', seed: 5 },
        fg: { type: 'counter', till: 'NEXT!', tillX: 560 },
        chars: [
          { who: 'worker', x: 290, y: 520, scale: .9, pose: 'down', eyes: 'normal', look: 6 },
          { who: 'manager', x: 820, y: 525, scale: .9, pose: 'holdPhone', eyes: 'annoyed' },
        ],
        bubbles: [
          { text: 'Can we get a second cashier on Fridays? The queue was out the door.', x: 18, y: 14, w: 540, to: 0 },
          { text: "I'll look into it.", x: 680, y: 40, w: 300, to: 1 },
        ],
      },
      {
        caption: '3 weeks later',
        bg: { type: 'breakroom', note: 'Our door is always open', noteX: 420, clockX: 2000, vendX: 2000 },
        chars: [
          { who: 'worker', x: 270, y: 600, scale: .9, pose: 'down', eyes: 'worried', look: 6 },
          { who: 'manager', x: 820, y: 600, scale: .9, pose: 'holdPhone', eyes: 'smug' },
        ],
        bubbles: [
          { text: 'Any news on Fridays?', x: 18, y: 60, w: 300, to: 0 },
          { text: 'Still looking into it.', x: 700, y: 30, w: 320, to: 1 },
        ],
      },
      {
        bg: { type: 'office', sign: 'Our door is always open', signX: 800, winX: 30 },
        chars: [{ who: 'worker', x: 560, y: 580, scale: .95, pose: 'facepalm', eyes: 'tired' }],
        bubbles: [{ text: "He's not looking into it. He's looking AWAY from it.", type: 'thought', x: 20, y: 18, w: 400, to: 0 }],
      },
    ],
  },
  {
    id: 3, title: 'Day Off',
    panels: [
      {
        caption: 'Saturday. Day off.',
        bg: { type: 'home', sign: 'Home sweet day off', signX: 780 },
        chars: [{ who: 'worker', x: 470, y: 580, scale: .95, pose: 'phoneEar', eyes: 'normal' }],
        bubbles: [{ text: 'Hello?', x: 60, y: 80, w: 190, to: 0 }],
      },
      {
        bg: { type: 'office', sign: 'All hands on deck!', signX: 800, winX: 30 },
        chars: [{ who: 'manager', x: 450, y: 590, scale: .92, pose: 'phoneEar', eyes: 'happy' }],
        bubbles: [{ text: "Hey! I know it's your day off, but could you come in for just a few hours?", x: 18, y: 14, w: 620, to: 0 }],
      },
      {
        bg: { type: 'home', lampX: 960 },
        chars: [{ who: 'worker', x: 560, y: 580, scale: .95, pose: 'phoneEar', eyes: 'smug' }],
        bubbles: [
          { text: "I can't today. Thanks for thinking of me!", x: 18, y: 18, w: 400, to: 0 },
          { text: 'No excuse. No guilt. No 20-minute story.', type: 'thought', x: 700, y: 14, w: 320, to: 0 },
        ],
      },
    ],
  },
  {
    id: 4, title: 'The Break',
    panels: [
      {
        bg: { type: 'store', seed: 15 },
        chars: [
          { who: 'worker', x: 290, y: 600, scale: .9, pose: 'down', eyes: 'tired', look: 6 },
          { who: 'manager', x: 820, y: 600, scale: .9, pose: 'holdPhone', eyes: 'stern' },
        ],
        bubbles: [
          { text: "I've been here 6 hours. Can I take my break?", x: 18, y: 14, w: 520, to: 0 },
          { text: "Later. We're slammed.", x: 690, y: 30, w: 320, to: 1 },
        ],
      },
      {
        caption: '4 hours later',
        bg: { type: 'store', seed: 9 },
        chars: [
          { who: 'manager', x: 240, y: 600, scale: .9, pose: 'gesture', eyes: 'happy' },
          { who: 'worker', x: 850, y: 620, scale: .95, pose: 'shrug', eyes: 'shocked' },
        ],
        bubbles: [
          { text: 'Okay, you can take your break now!', x: 18, y: 56, w: 400, to: 0 },
          { text: 'My shift ends in 5 minutes!', x: 600, y: 18, w: 420, to: 1 },
        ],
      },
      {
        caption: 'The right way',
        bg: { type: 'breakroom', note: 'Break schedule: TBD', noteX: 470, clockX: 2000, vendX: 2000 },
        chars: [
          { who: 'worker', x: 270, y: 600, scale: .9, pose: 'down', eyes: 'normal', look: 6 },
          { who: 'manager', x: 830, y: 600, scale: .9, pose: 'holdPhone', eyes: 'annoyed' },
        ],
        bubbles: [
          { text: 'What time can I take my break? 2:00 or 2:30?', x: 18, y: 56, w: 430, to: 0 },
          { text: '...2:30.', x: 800, y: 40, w: 200, to: 1 },
        ],
      },
    ],
  },
  {
    id: 5, title: 'Employee Of The Month',
    panels: [
      {
        bg: { type: 'office', winX: 30 },
        chars: [
          { who: 'manager', x: 320, y: 600, scale: .9, pose: 'gesture', eyes: 'happy' },
          { who: 'worker', x: 800, y: 600, scale: .9, pose: 'down', eyes: 'happy', look: -6 },
        ],
        bubbles: [{ text: "Congrats! You're Employee of the Month!", x: 18, y: 14, w: 470, to: 0 }],
      },
      {
        bg: { type: 'office', winX: 30, plant: false },
        chars: [
          { who: 'worker', x: 290, y: 600, scale: .9, pose: 'down', eyes: 'normal', look: 6 },
          { who: 'manager', x: 820, y: 600, scale: .9, pose: 'crossed', eyes: 'smug' },
        ],
        bubbles: [
          { text: 'Does that come with a raise?', x: 18, y: 24, w: 360, to: 0 },
          { text: 'It comes with a CERTIFICATE.', x: 620, y: 24, w: 400, to: 1 },
        ],
      },
      {
        bg: { type: 'breakroom', note: 'Employee of the month: YOU!', noteX: 30, clockX: 2000 },
        chars: [{ who: 'worker', x: 640, y: 570, scale: .95, pose: 'chin', eyes: 'annoyed' }],
        fg: { type: 'table', mug: '#1 Employee', mugX: 880 },
        bubbles: [{ text: "Great. I'll pay my rent in certificates.", type: 'thought', x: 330, y: 16, w: 380, to: 0 }],
      },
    ],
  },
  {
    id: 6, title: 'Step Up',
    panels: [
      {
        bg: { type: 'store', seed: 21 },
        chars: [
          { who: 'manager', x: 300, y: 600, scale: .9, pose: 'gesture', eyes: 'stern' },
          { who: 'worker', x: 810, y: 600, scale: .9, pose: 'down', eyes: 'normal', look: -6 },
        ],
        bubbles: [{ text: 'We need everyone to step up this holiday season!', x: 18, y: 14, w: 520, to: 0 }],
      },
      {
        bg: { type: 'store', seed: 33, banner: 'Holiday season is here!' },
        chars: [
          { who: 'worker', x: 290, y: 610, scale: .9, pose: 'down', eyes: 'smug', look: 6 },
          { who: 'manager', x: 820, y: 610, scale: .9, pose: 'crossed', eyes: 'annoyed' },
        ],
        bubbles: [
          { text: 'Does stepping up come with stepped-up pay?', x: 18, y: 84, w: 400, to: 0 },
          { text: "Let's not make this about money.", x: 620, y: 84, w: 400, to: 1 },
        ],
      },
      {
        bg: { type: 'breakroom', note: 'Holiday hours: all of them', noteX: 30, clockX: 2000 },
        chars: [{ who: 'worker', x: 640, y: 570, scale: .95, pose: 'facepalm', eyes: 'tired' }],
        fg: { type: 'table', mug: 'Survived Black Friday', mugX: 880 },
        bubbles: [{ text: "It's a JOB. It's literally about money.", type: 'thought', x: 330, y: 16, w: 380, to: 0 }],
      },
    ],
  },
  {
    id: 7, title: 'Stay Late',
    panels: [
      {
        bg: { type: 'till', seed: 8 },
        fg: { type: 'counter', till: '5:58 PM', tillX: 560 },
        chars: [
          { who: 'worker', x: 270, y: 515, scale: .9, pose: 'down', eyes: 'shocked', look: 6 },
          { who: 'manager', x: 830, y: 520, scale: .9, pose: 'holdPhone', eyes: 'happy' },
        ],
        bubbles: [{ text: 'Can you stay till close? Pleeease?', x: 540, y: 14, w: 470, to: 1 }],
      },
      {
        bg: { type: 'till', seed: 8 },
        fg: { type: 'counter' },
        chars: [
          { who: 'worker', x: 270, y: 520, scale: .9, pose: 'gesture', eyes: 'worried', look: 6 },
          { who: 'manager', x: 830, y: 520, scale: .9, pose: 'crossed', eyes: 'annoyed' },
        ],
        bubbles: [
          { text: 'I have to pick up my sister at 6.', x: 18, y: 18, w: 400, to: 0 },
          { text: "Can't someone else get her?", x: 620, y: 18, w: 390, to: 1 },
        ],
      },
      {
        bg: { type: 'till', seed: 8 },
        fg: { type: 'counter' },
        chars: [
          { who: 'worker', x: 270, y: 520, scale: .9, pose: 'crossed', eyes: 'smug', look: 6 },
          { who: 'manager', x: 830, y: 520, scale: .9, pose: 'down', eyes: 'shocked' },
        ],
        bubbles: [
          { text: "Sure! Can't someone else close?", x: 18, y: 18, w: 420, to: 0 },
          { text: '...', x: 840, y: 40, w: 130, to: 1 },
        ],
      },
    ],
  },
];
