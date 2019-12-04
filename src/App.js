import React from "react";
import Header from "./components/Header";
import LivePodcast from "./components/LivePodcast";
import ArchivedPodcasts from "./components/ArchivedPodcasts";
import SubmitContainer from "./components/SubmitContainer";
import ArtFeatures from "./components/ArtFeatures";
import SpecialOTMonth from "./components/SpecialOTMonth";
import Submit from "./components/Submit";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    isLive: false,
    error: null,
    hasError: false,
    nextDate: 'November 24',
    nextTime: '6pm CST'
  };

  componentDidMount(){
    this.handleTwitchFetch();
  }

  //Twitch API Fetch to see if twitch channel is live
  handleTwitchFetch = () => {
    fetch(
      "https://api.twitch.tv/helix/streams?user_login=redacreneighborhoodwatch", {
        method: "GET",
        headers: {
          "Client-ID": "0zqbf3ahje4ly66ole0ex8tbrgc6m8"
        }
      }
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
        console.log('returned the data', resJson)
        console.log('!!resJson.data[0] = ', !!resJson.data[0])
        if (!!resJson.data[0]) {
          this.setState({
            isLive: true
          })
        } 
        
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
        {this.state.isLive ? <LivePodcast /> : <></>}
        <ArchivedPodcasts nextDate={this.state.nextDate} nextTime={this.state.nextTime}/>
        <SubmitContainer />
        <ArtFeatures />
        <SpecialOTMonth nextDate={this.state.nextDate} nextTime={this.state.nextTime}/>
        <Submit />
        <SubFooter />
        <Footer />
      </div>
    );
  }
}

export default App;
