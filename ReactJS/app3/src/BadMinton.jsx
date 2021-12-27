import React,{useState} from "react";
export const BadMinton = ()=>{
    const[game , setgame] = useState([])
    getData = ()=>{
        var options = {
            method: 'GET',
            url: 'https://tennis-data1.p.rapidapi.com/tennis/players',
            params: {page: '1', id: '40827'},
            headers: {
              'x-rapidapi-host': 'tennis-data1.p.rapidapi.com',
              'x-rapidapi-key': 'c7f365081cmsh15f59f6fa2f4617p144973jsna39a8d3f169c'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }
    return(
        <div>
            <h1>Hello Tennis</h1>
            <button onClick={getData}>GetData</button>
            <hr />
            {getData(()=>{
                return <p>{getData.album}</p>
            })}
        </div>
    )
}