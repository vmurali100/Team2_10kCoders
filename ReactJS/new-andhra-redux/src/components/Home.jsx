import React, { useState } from 'react';
import { connect } from 'react-redux';
import { get_all_users_action } from '../redux/actions';
import { useEffect } from 'react';


const Home = (props) => 
{
    const { districts, getData} = props;
    const [input, setInput] = useState("");
    const [ans, setAns] = useState("");



    useEffect(() => { getData()}, []);
    console.log(props)


    function handleInput(e) {
        setInput(e.target.value);
        setAns("")
    }

    function handleButton() {
            let district = districts.find(d => d.constituencies.indexOf(input.toLowerCase()) > -1)
            if (district !== undefined) {
                setAns(district.districtName)

            }
            else {
                setAns("Invalid")
            }
            setInput("");
    }

    return (
        <div>
            <div className="container">
                <div className="row">


                    {/* Search box */}
                    <div className="col-md-5 mx-auto">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" value={input} placeholder="Search with Assembly constituencies name" onChange={handleInput} />
                            <button className="btn btn-outline-success" type="button" onClick={() => handleButton()}>Find District</button>
                        </form>
                        <div className='row' style={{ marginTop: 50 + "px" }}>

                            {
                               <p className='App'>Your new district is <strong>{ans}</strong> </p>
                            }



                        </div>

                    </div>

                </div>
                <div className='row'>
                    {/* displaying all the districts and their constistencies */}
                    <div className="col App">
                        <h2 style={{ textDecoration: "underline", color: "grey", fontSize: "25px", marginTop: 50 + "px" }}><em>List of new districts and their Assembly constituencies</em></h2>
                        
                        <table className='table'>
                            {
                                districts.map((d, i) => {
                                    return (
                                        <tbody key={d.id}>
                                        <tr>
                                            <th >{d.districtName}</th>
                                        </tr>
                                        <tr>
                                            {
                                                
                                                d.constituencies.map((c, i) => 
                                                {
                                                    var unqid = new Date().getTime()*i;
                                                    return <td key={unqid}>{c}</td>
                                                })
                                            }
                                            
                                        </tr>
                                    </tbody>)
                                })
                            }

                        </table>

                    </div>
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        districts: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(get_all_users_action())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
