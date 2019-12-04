import React, {useEffect, useState} from 'react';
import '../styles/ArchivedPodcasts.css';

function ArchivedPodcasts(props) {

  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos();
  },[]);

   const getVideos = () => {
    fetch ('https://api.twitch.tv/helix/videos?user_id=427014475', {
      method: 'GET',
      headers: {
        'Client-ID': '0zqbf3ahje4ly66ole0ex8tbrgc6m8'
      }
    })
    .then(res => {
      if (res.ok) {
        console.log('returned okay')
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then(resJson => {
      console.log('returned the data', resJson)
      setVideos(resJson.data)
      console.log(videos)
    })
    .catch(err => {
      console.log('returned an error')
      setError({
        error: err.message
      })
    });
  }

  const videoList = videos.map(video => {
      return (
      <li key={video.id} >
        <p>{video.title}</p>
        <p>{video.url}</p>
        {/* <img src={video.thumbnail_url} alt='thumbnail' /> */}
      </li>)
    })
  
  return(
    <div className="archived-podcasts">
      <h2>Archived Podcasts</h2>
      <ul>{videoList ? videoList : <></>}</ul>
      <p>Remember to catch us live on {props.nextDate} at {props.nextTime}!</p>
      <div>YOUTUBE PLAYLIST HERE</div>
      <p>You can find our past podcasts on 
        <a className="archived-podcasts-links" href="https://www.youtube.com/channel/UCoM7g7mB85ZxnHyR_AS7TrA/featured" target='_blank' rel="noopener noreferrer">YouTube</a> and 
        <a className="archived-podcasts-links" href="https://www.twitch.tv/redacreneighborhoodwatch/videos" target='_blank' rel="noopener noreferrer">Twitch!</a></p>
    </div>
  )
}

export default ArchivedPodcasts;