import { useEffect, useState } from "react";

const SecondComponent = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });
  const [user, setUser] = useState([]);
  const { myNam, numb } = props;

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([...user, values]);
    setValues({ email: "", password: "" });

    // console.log(e);
    // console.log("Name :" + name, "Password :" + password);
    // setName("");
    // setPassword("");
  };

  return (
    <>
      <p>Second Component</p>
      <p>{myNam}</p>
      <p>{numb}</p>
      {/* <form>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="Name"
          />
        </div>
        <div>
          <label htmlFor="Password">Passowrd</label>
          <input
            type="password"
            name="password"
            value={password}
            id="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={values.password}
            onChange={handleChange}
            id="exampleInputPassword1"
            autoComplete="on"
          />
        </div>
        {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {user.map((itm) => (
        <div>
          <p>{itm.email}</p>
          <p>{itm.password}</p>
        </div>
      ))}
    </>
  );
};

export default SecondComponent;
