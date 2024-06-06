export function getTimeFilm(time: number): string {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const timeFormatted = minutes.toString().padStart(2, '0');

  return `${hours}h : ${timeFormatted}min`;
}
