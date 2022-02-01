export const Admindashboard = () => {
    const navigate = useNavigate();
  
    const getuserlist = () => {
      navigate("/admindashboard/userslist");
    };
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <button type="button" onClick={getuserlist}>
                GET USERS
              </button>
              <button type="button">
                <Link to="districtslist">GET DISTRICTS</Link>
              </button>
              {/* <button  type="button"><Link to="addnew">ADD NEW DISTRICT DETAILS</Link></button> */}
            </div>
            <div className="col-4"></div>
          </div>
        </div>{" "}
        <br />
      </div>
    );
  };
  
  export const DistrictsList = () => {
    const [distlist, setDistlist] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3000/districtslist").then(({ data }) => {
        setDistlist(data);
        console.log(data);
      });
    }, []);
  
    const getDists = () => {
      axios.get("http://localhost:3000/districtslist").then(({ data }) => {
        setDistlist(data);
        console.log(data);
      });
    };
  
    function handleEdit(i) {
      console.log("clicked ", i);
    }
    const handleDelete = (i) => {
      console.log("clicked ", i);
    };
  
    return (
      <div>
        <h1>Districts LIST</h1>
  
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <button
                type="button"
                onClick={getDists}
                className="btn btn-primary"
              >
                get districts list
              </button>
              {distlist != null ? (
                <table style={{ border: "2px solid", marginTop: "40px" }}>
                  <thead>
                    <tr>
                      <th style={{ border: "2px solid" }}>S.No</th>
                      <th style={{ border: "2px solid" }}>DISTRICT</th>
                      <th style={{ border: "2px solid" }}>CONTUENCY</th>
                      <th colSpan={2} style={{ border: "2px solid" }}>
                        Manage
                      </th>
                    </tr>
                  </thead>
                  {distlist.map((d, i) => {
                    return (
                      <tr style={{ border: "2px solid" }}>
                        {" "}
                        <td style={{ border: "2px solid" }}>{d.id}</td>
                        <td style={{ border: "2px solid" }}>{d.dist}</td>
                        {d.constiuencies.map((e) => {
                          return (
                            <tbody>
                              <td key={e} style={{ paddingLeft: "10px" }}>
                                <li style={{ textAlign: "left" }}>{e}</li>
                              </td>{" "}
                            </tbody>
                          );
                        })}
                        <td key={i} style={{ border: "2px solid" }}>
                          {" "}
                          <button
                            type="button"
                            onClick={(i) => handleEdit(i)}
                            className="btn btn-warning"
                          >
                            Edit
                          </button>{" "}
                          <button
                            type="button"
                            onClick={(i) => handleDelete(i)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>{" "}
                      </tr>
                    );
                  })}
                </table>
              ) : (
                ""
              )}
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row" style={{ marginTop: "40px" }}>
            {/* <button>EDIT</button>
                 <button>DELETE</button> */}
            <div className="col-4"></div>
            <div className="col-4">
              {" "}
              <button>
                <Link to="/admindashboard/addnew">ADD NEW DIST</Link>
              </button>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export const AddNewDist = () => {
    const [addnew, setaddNew] = useState({
      dist: "",
      // consti : [],
    });
    const [area, setArea] = useState("");
    const handleChange1 = (e) => {
      let newone = { ...addnew };
  
      newone[e.target.name] = e.target.value;
  
      setaddNew(newone);
    };
    const handleChange2 = (e) => {
      setArea(e.target.value);
    };
    const addnewdistFunc = () => {
      var constiClone = [];
      var constiuencies = [...constiClone];
      constiuencies.push(area);
      var addnewone = { ...addnew , constiuencies};
      // Object.assign(addnewone, constiClone);
      axios
        .post("http://localhost:3000/districtslist", addnewone)
        .then(({ data }) => {
          console.log(data);
        });
      console.log(addnew);
    };
  
    return (
      <div>
        <h1>Add New Dist</h1>
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <form>
                <div class="mb-3">
                  <label class="form-label">District</label>
                  <input
                    type="text"
                    class="form-control"
                    value={addnew.dist}
                    name="dist"
                    onChange={(e) => handleChange1(e)}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Constuencey</label>
                  <input
                    type="text"
                    class="form-control"
                    value={area}
                    name="area"
                    onChange={(e) => handleChange2(e)}
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={addnewdistFunc}
                >
                  ADD
                </button>
              </form>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    );
  };