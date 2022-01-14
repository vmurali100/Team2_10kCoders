import { Component } from "react";
import { connect } from "react-redux";
import { getAlbumsAction, getApiDataAction } from "./Redux/Action";

class Albums extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
       

        {this.props.albums ? (
          this.props.albums.map((data) => {
            return <li>{data.title}</li>;
          })
        ) : <button type="button" onClick={() => this.props.getAlbumsFunc()}>
        GET ALBUMS
      </button> }
        {console.log(this.props)}
      </div>
    );
  }
}

const MSTP = (state) => {
  return {
    albums: state.albums,
  };
};
const MDTP = (dispatch) => {
  return {
   
    getAlbumsFunc: () => {
      dispatch(getAlbumsAction());
    },
  };
};

export default connect(MSTP, MDTP)(Albums);
