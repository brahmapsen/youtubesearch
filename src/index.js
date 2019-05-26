import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import _ from 'lodash';


const API_KEY = '';

const WEATHER_API_KEY = '';


class App extends Component {

    constructor(props) {

        super(props);

        this.state = { videos: [],
                        selectedVideo: null
                     };

        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        
        YTSearch( {key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        } );
    }

    render() {

        //calls every 300ms
        const videoSearch = _.debounce ( (term) => { this.videoSearch(term)}, 300 );

        return ( 
                <div>  
                    <SearchBar onVideoSearch={ videoSearch }/>  
                    <VideoDetail video = { this.state.selectedVideo}/>
                    <VideoList 
                        onVideoSelect = { selectedVideo =>  this.setState({selectedVideo})}
                        videos =  { this.state.videos }/>  

                </div> 
            );
        }

}

//generate HTML and show it in page - have to pass onstance of class App
ReactDOM.render(<App/>, document.querySelector('.container'));