export const formatTime = (totalSeconds) => {
  // Calculate the minutes by dividing the total seconds by 60 and taking the integer part
  const minutes = Math.floor(totalSeconds / 60);

  // Calculate the remaining seconds using the modulo operator
  const seconds = totalSeconds % 60;

  // Pad the minutes and seconds with a leading zero if they are less than 10
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};