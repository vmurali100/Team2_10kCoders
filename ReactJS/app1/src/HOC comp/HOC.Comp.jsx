import React,{Component} from 'react'

export const HOCComp = (OrginalComponent) => {
    
    
 class NewComponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          Count:0,
       }
     }
     handleCount = ()=>{
         this.setState({Count:this.state.Count+1})
     }
     
      render() {
        return <OrginalComponent Count={this.state.Count} handleCount={this.handleCount}/>
        
      }
    }
    
  return (
      NewComponent
  )
}


