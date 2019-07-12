import React from 'react';

function ArchivedPodcasts(props) {

  return(
    <div className="archived-podcasts">
      <h2>Archived Podcasts</h2>
      <p>Remember to catch us live on {props.nextDate} at {props.nextTime}!</p>
      <div>YOUTUBE PLAYLIST HERE</div>
      <p>You can find our past podcasts on 
        <a href="https://www.youtube.com/channel/UCoM7g7mB85ZxnHyR_AS7TrA/featured" target='_blank' rel="noopener noreferrer">YouTube</a> and 
        <a href="https://www.twitch.tv/redacreneighborhoodwatch/videos" target='_blank' rel="noopener noreferrer">Twitch!</a></p>
    </div>
  )
}

export default ArchivedPodcasts;