export default function generatePlayers() {
  const players = [];

  for (let i = 1; i <= 8; i++) {
    players.push({
      playerName: i,
      placedCard: false,
      isMaster: false,
      latestCardId: -1,
    });
  }

  return players;
}
