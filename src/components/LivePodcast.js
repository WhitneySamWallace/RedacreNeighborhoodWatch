import React from 'react';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class LivePodcast extends React.Component {

  static defaultProps = {
    targetID: 'twitch-embed',
    width: '100%',
    height: '480',
    channel: 'redacreneighborhoodwatch',
  }

  componentDidMount() {
    let embed;
    const script = document.createElement('script');
    script.setAttribute('src', EMBED_URL);
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed(this.props.targetID, {...this.props});
      });
      document.body.appendChild(script);
  }
  render() {

    return(
      <section>
        <h2>We're Live! Join us!</h2>
        <div id={this.props.targetID}></div>
      </section>
    )
  }
}

export default LivePodcast;