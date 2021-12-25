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
     let strdata = JSON.stringify(res.data)
      localStorage.setItem("localtrack" , strdata)
    });
  }, []);

  const getTrack = () => {
    // var options = {
    //   method: "GET",
    //   url: "https://shazam-core.p.rapidapi.com/v1/tracks/search",
    //   params: { query: "Wellerman" },
    //   headers: {
    //     "x-rapidapi-host": "shazam-core.p.rapidapi.com",
    //     "x-rapidapi-key": "fdbdce28b4msh37131454eb3e59ep1301e8jsn35f86ee9f1a2",
    //   },
    // };
    // axios.request(options).then((res) => {
    //   console.log(res.data);
    //   settrack(res.data);
    // });
 

  return (
    <div id="mydiv">
      <ol>
{track.map((al)=>{
     return <li> {al.alias} </li>
 })}
</ol>
      <button
        onClick={() => {
          getTrack();
        }}
      >
        GET SEARCH TRACKS
      </button>
    </div>
  );
};
}
export default Searchtrack;
