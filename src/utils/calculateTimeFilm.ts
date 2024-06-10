export function GetTimeFilm(time: number): string {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes.toString().padStart(2, '0')}min`;
}
