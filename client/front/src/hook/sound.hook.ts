export const createTaskSound = () =>
{
  const audio:HTMLAudioElement = document.querySelector('#create') as HTMLAudioElement
  audio.play()
}
export const playTrash = () =>
{
  const audio:HTMLAudioElement = document.querySelector('#trash') as HTMLAudioElement
  audio.play()
}
export const playVision = () =>
{
  const audio:HTMLAudioElement = document.querySelector('#vision') as HTMLAudioElement
  audio.play()
}