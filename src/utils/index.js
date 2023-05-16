/** For getting random avatarsPics */
export function randomAvatarSrc() {
  const seeds = [
    "Boots",
    "Chloe",
    "Boo",
    "Daisy",
    "Chester",
    "Bailey",
    "Abbie",
    "Garfield",
    "Bandit",
    "Dusty",
    "Bob",
    "Charlie",
    "Casper",
    "Cuddles",
    "George",
    "Felix",
    "Bear",
    " Gizmo",
    "Bubba",
    "Buster",
  ];
  const randomSeed = seeds[Math.floor(seeds.length * Math.random())];

  const baseUrl = `https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=${randomSeed}&radius=30`;

  return baseUrl;
}

/** For get The String "00:00" from the timeStamp */
export function getHourString(timeStamp) {
  const time = new Date(timeStamp);
  return `${time.getHours()}:${time.getMinutes()}`;
}
