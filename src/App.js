import React from "react";
import Header from "./components/Header";
import LivePodcast from "./components/LivePodcast";
import ArchivedPodcasts from "./components/ArchivedPodcasts";
import SubmitContainer from "./components/SubmitContainer";
import ArtFeatures from "./components/ArtFeatures";
import DaimonOTMonth from "./components/DaimonOTMonth";
import Submit from "./components/Submit";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    isLive: false,
    error: null,
    hasError: false,
    nextDate: 'August 4th',
    nextTime: 'time TBD'
  };

  componentDidMount(){
    this.handleTwitchFetch();
  }

  //Twitch API Fetch to see if twitch channel is live
  handleTwitchFetch = () => {
    fetch(
      "https://api.twitch.tv/helix/streams?user_id=redacreneighborhoodwatch"
    )
      .then(res => {
        if (res.ok) {
          console.log('returned okay')
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then(resJson => {
        console.log('returned the data')
        this.setState({
          isLive: resJson.data.type
        })
      })
      .catch(error => {
        console.log('returned an error')
        this.setState({
          hasError: true,
          error: error.message
        })
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* {this.state.isLive === 'live'? <LivePodcast />: ''} */}
        <ArchivedPodcasts nextDate={this.state.nextDate} nextTime={this.state.nextTime}/>
        <SubmitContainer />
        <ArtFeatures />
        <DaimonOTMonth nextDate={this.state.nextDate} nextTime={this.state.nextTime}/>
        <Submit />
        <SubFooter />
        <Footer />
      </div>
    );
  }
}

export default App;
