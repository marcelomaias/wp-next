import YouTube from 'react-youtube'

export const YouTubeBlock = ({ url }) => {
  const id = url.split('=')
  const videoId = id[id.length - 1]

  const opts = {
    height: '720',
    width: '1280',
    playerVars: {
      // autoplay: 1,
    },
  }

  console.log('ID: ', videoId)
  return <YouTube videoId={videoId} opts={opts} />
}
