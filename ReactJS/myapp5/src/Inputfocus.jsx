import React ,{ Component ,createRef } from "react"

export default class  Inputfocus extends Component  {
  constructor(props){
      super(props);
      this.Inputref = createRef()
  }
  

  render(){
      return <div>
          hey from app
   
        <input type="text" ref = 
          {this.Inputref} />
          
     
          
      </div>
  }
  componentDidMount(){
      this.Inputref.current.focus();
      console.log(this.Inputref.current.value)
  }
} 