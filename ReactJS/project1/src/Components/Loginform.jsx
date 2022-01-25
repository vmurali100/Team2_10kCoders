import React from 'react';
import { connect } from "react-redux"
import { getUserTokenAction } from '../Redux/actions';


const Loginform = (props) => 
{
  console.log(props)
  return (
  <div>
    
    <button onClick={props.fetch_token()}>Submit</button>
  </div>
  );
};
function mapStateToProps(state)
{
    return {
        token: state.token
    }
}
function mapDispatchToProps(dispatch)
{
    return {
        fetch_token : ()=> dispatch(getUserTokenAction)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loginform)
