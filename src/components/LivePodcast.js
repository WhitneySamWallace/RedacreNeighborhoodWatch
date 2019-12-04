import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';


class LivePodcast extends React.Component {

  render() {

    return(
      <section>
        <h2>We're Live! Join us!</h2>
        <ReactTwitchEmbedVideo 
          autoplay
          channel='redacreneighborhoodwatch'
          muted={false}
          targetClass='twitch-embed'
          width='100%'
          max-width='1200' />
      </section>
    )
  }
}

export default LivePodcast;