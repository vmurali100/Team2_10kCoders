import axios from "axios";
import { useEffect, useState } from "react";

const JSONpost = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    let URL = "https://jsonplaceholder.typicode.com/posts";
    axios.get(URL).then(({ data }) => {
      setEmployee(data);
    });
  }, []);

  return (
    <div>
      <h1>JSON - POSTS(FUNCTION)</h1>
      <ol>
        {employee.map((emp) => {
          return <li>{emp.title}</li>;
        })}
      </ol>
    </div>
  );
};
export default JSONpost;

//  fill text person +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export const JSONcomments = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    let URL = "https://jsonplaceholder.typicode.com/comments";
    axios.get(URL).then(({ data }) => {
      setEmployee(data);
    });
  }, []);

  return (
    <div>
      <h1>JSON - COMMENTS(FUNCTION)</h1>
      <ol>
        {employee.map((emp) => {
          return <li>{emp.email}</li>;
        })}
      </ol>
    </div>
  );
};

//  fill text name +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const JSONalbums = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    let URL = "https://jsonplaceholder.typicode.com/albums";
    axios.get(URL).then(({ data }) => {
      setEmployee(data);
    });
  }, []);

  return (
    <div>
      <h1>JSON - ALBUMS(FUNCTION)</h1>
      <ol>
        {employee.map((emp) => {
          return <li>{emp.title}</li>;
        })}
      </ol>
    </div>
  );
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const JSONphotos = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    let URL = "https://jsonplaceholder.typicode.com/photos";
    axios.get(URL).then(({ data }) => {
      setEmployee(data);
    });
  }, []);

  return (
    <div>
      <h1>JSON - PHOTOS(FUNCTION)</h1>
      <ol>
        {employee.map((emp) => {
          return <li><img style={{"width":"50px" ,  "height": "50px"}} src={emp.image} alt="" /></li>;
        })}
      </ol>
    </div>
  );
}
  // }++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  export const JSONtodos = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
      let URL = "https://jsonplaceholder.typicode.com/todos";
      axios.get(URL).then(({ data }) => {
        setEmployee(data);
      });
    }, []);

    return (
      <div>
        <h1>JSON - TODOS(FUNCTION)</h1>
        <ol>
          {employee.map((emp) => {
            return <li>{emp.title}</li>;
          })}
        </ol>
      </div>
    );
  };

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  export const JSONusers = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
      let URL = "https://jsonplaceholder.typicode.com/users";
      axios.get(URL).then(({ data }) => {
        setEmployee(data);
      });
    }, []);

    return (
      <div>
        <h1>JSON - USERS(FUNCTION)</h1>
        <ol>
          {employee.map((emp) => {
            return <li>{emp.email}</li>;
          })}
        </ol>
      </div>
    );
  };

