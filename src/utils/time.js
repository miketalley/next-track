import moment from 'moment';

window.moment = moment;

function makeTwoDigits(num) {
  // eslint-disable-next-line prefer-template
  return ('0' + num).slice(-2);
}

export const playlistDuration = (playlist) => {
  let playlistDurationMS = 0;

  playlist.tracks.items.forEach((item) => {
    playlistDurationMS += item.track.duration_ms;
  }, 0);

  const playlistTime = moment.duration(playlistDurationMS, 'milliseconds');
  const playlistDays = playlistTime.days();
  const playlistHours = playlistTime.hours();
  const playlistMinutes = playlistTime.minutes();
  const playlistSeconds = playlistTime.seconds();

  return `${playlistDays}d ${playlistHours}h ${playlistMinutes}m ${playlistSeconds}s`;
};

export const millisecondsToDigital = (ms) => {
  const duration = moment.duration(ms, 'milliseconds');
  const durationMinutes = duration.minutes();
  const durationSeconds = makeTwoDigits(duration.seconds());

  return `${durationMinutes}:${durationSeconds}`;
};

export default {
  playlistDuration,
  millisecondsToDigital
};
