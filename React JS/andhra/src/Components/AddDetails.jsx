import React,{useState} from 'react';

export const AddDetails = () => {
    const [district, setdistrict] = useState({
        add_district:'',
        constituency:""
    });
    
    const handleChange = (e) => {
        let addDistrict= { ...district };
        addDistrict[e.target.name] = e.target.value;
        setadmin(addDistrict);
    };

    const handleSubmit =()=>{
        console.log(district);
    }
  return <div>
       <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            Add District
                        </label>
                        <input
                            placeholder="User Name"
                            type="text"
                            class="form-control"
                            value={district.add_district}
                            name="add_district"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            Add Constituency
                        </label>
                        <input
                            placeholder="Email"
                            type="text"
                            class="form-control"
                            value={district.constituency}
                            name="constituency"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                   

                    <button style={{ marginBottom: "30px" }} type="button" class="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button><br />
                </form>
  </div>;
};
