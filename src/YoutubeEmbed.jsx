import React from "react";
import PropTypes from "prop-types";
import secret from '../secret/secret.txt'


class YoutubeEmbed extends React.Component{

    constructor (){
        super()
        this.state = {
            embedId: null,
            loaded: false,
        }
    }

async randGen() {
     const sec = await fetch(secret)
     const key = await sec.text()
     console.log(key)
     const rand = Math.round( Math.random() * 9999)
     const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&maxResults=1&q=${rand}.mp4`
    //  const url = `https://www.google.com/search?search?q=youtube+${rand}.mp4`
     const res = await fetch(url)
     const data = await res.json()
    //  console.log(data)
    //  console.log(data.items[0].id.videoId)
    this.setState({
        loaded: true,
        embedId: data.items[0].id.videoId
    })

            
}



    render() {
        return(
            <>
            {
                this.state.loaded &&
                <div className="video-responsive">
                <iframe
                    width="1200px"
                    height="800px"
                    // src = "https://www.youtube.com/embed/TxMTEmUORa8"
                    src={`https://www.youtube.com/embed/${this.state.embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                
                </div>
            }
      <br></br>
      <button onClick={() => this.randGen()}>Generate Random Youtube Video</button>
    
    </>
  );

}
}
  

  
  export default YoutubeEmbed;