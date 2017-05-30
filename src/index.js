import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search from 'youtube-api-search';

import SearchBar from "./components/searchbar";
import VideoList from './components/videolist';
import VideoDetai from './components/videodetail';

const ApiKey = 'AIzaSyDMoaW_ARpkh7lkfUkW4jUR7vCI1HsDQ6c';

class App extends Component {
constructor (props){
  super(props);

  this.state= {
    videos: [],
    selectedVideo: null
   }

  Search({key:ApiKey, term:'baahubali'}, (videos)=>{
   this.setState({
     videos:videos,
     selectedVideo:videos[0]
    })
  })
}
render() {
  console.log(this.state.selectedVideo);
return (
       <div>
       <SearchBar
         onChangeTerm={(term)=>{
           Search({key:ApiKey, term:term}, (videos)=>{
            this.setState({
              videos:videos,
              selectedVideo:videos[0]
             })
           })
         }}
        />
       <VideoDetai video={this.state.selectedVideo} />
       <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo:selectedVideo })}
                  videos={this.state.videos}  />
       </div>
       );
};
};

ReactDOM.render(<App />, document.querySelector(".container"));
