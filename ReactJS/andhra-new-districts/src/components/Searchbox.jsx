// import React, { useEffect, useState } from 'react';
// // import { MDBContainer, MDBAutocomplete } from "mdbreact";
// import axios from "axios"

// export const Searchbox = () => 
// {
//     const [dist, setDist] = useState([])
//     useEffect(()=>{
//         axios.get("http://localhost:3000/districts").then((res)=>{
//             console.log(res.data);
//             setDist(res.data);
//         })
//     },[])
//     let constituencies = [];
//     {
//         {/* let newarray = obj.map((d)=>d.names).flat() */}
//         constituencies = dist.map((d)=>{return d.constituencies}).flat()
//         console.log("constituencies" , constituencies)
//     }
//   return (
//   <div>
        
//       <MDBContainer>
//         <MDBAutocomplete
//           data={constituencies}
//           label="Choose your favorite state"
//           icon="heart"
//           clear
//           id="input"
//           getValue={this.logValue}
//         />
//       </MDBContainer>
//   </div>
//   );
// };

