import axios from "axios";
import { useEffect, useState } from "react";

const Searchtrack = () => {
  const [track, settrack] = useState([]);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/tracks/search",
      params: { query: "Wellerman" },
      headers: {
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
        "x-rapidapi-key": "fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2",
      },
    };
    axios.request(options).then((res) => {
      console.log(res.data);
      settrack(res.data);
      let strdata = JSON.stringify(res.data);
      localStorage.setItem("localtrack", strdata);
    });
  }, []);

  const getTrack = () => {
    var options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/tracks/search",
      params: { query: "Wellerman" },
      headers: {
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
        "x-rapidapi-key": "fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2",
      },
    };
    axios.request(options).then(({ data }) => {
      console.log(data);
      settrack(data);
    
    });
  };
  const trackDetails = () => {
    var options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/tracks/details",
      params: { track_id: "554591360" },
      headers: {
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
        "x-rapidapi-key": "fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2",
      },
    };
 
    axios.request(options).then(({ data }) => {
      console.log(data.sections);
      settrack(data.sections)
     
  
    });
    return <ol id="hero">
    {track.map((al) => {
      return <li> {al.type} </li>;
    })}
  </ol>
   
  };
 

  return (
    <div id="mydiv">  <button
        onClick={() => {
          getTrack();
        }}
      >
        GET SEARCH TRACKS
      </button>
      <br />
      <button
        onClick={() => {
          trackDetails();
        }}
      >
        GET TRACKS DETAILS
      </button> <br />
    
      <div id="content">
      <ol>
        {track.map((al) => {
          return <li> {al.alias} </li>;
        })}
      </ol>
      </div>
    </div>
  );
};
export default Searchtrack;
