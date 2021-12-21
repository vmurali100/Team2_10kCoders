import react, { useState } from "react";
import {Students} from "./Students";
export function MyNewClass() {
          const [name , setName] = useState("akhil");
          return <div>
              <p>
                  <Students std={name}/>
              </p>
                                                
          </div>
}