import React from 'react';
import { connect } from 'react-redux';
import { get_all_users_action } from '../redux/actions';

const Home = (props) => {
    console.log(props);
  return <div>hello home</div>;
};

const mapStateToProps = (state) =>
{
    return state
}

const mapDispatchToProps = (dispatch) =>
{
    return 
    {
        allData : ()=>{dispatch(get_all_users_action)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
