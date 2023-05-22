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

/** For get The String "hh:mm" or "dd/mm/yyyy" from the timeStamp */
export function getTimeString(timeStamp) {
  const time = new Date(timeStamp);
  if ((new Date() - time) / 3600000 >= 24) {
    return `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
  }
  return `${time.getHours()}:${time.getMinutes()}`;
}
