import axios from 'axios';

const KEY='AIzaSyAcFLFuiRhMF0DrY491wal1IPJWP6m5nIw';

export default axios.create({
    baseURL:' https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})