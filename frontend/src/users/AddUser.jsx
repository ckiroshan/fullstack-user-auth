import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    // useState hook to manage user input fields
    name: "",
    username: "",
    email: "",
  });

  // Destructure user state to access individual fields
  const { name, username, email } = user;

  const InputHandler = (e) => {
    // Wait for input changes to update user state
    setUser({ ...user, [e.target.name]: e.target.value });
    // Update the corresponding field in the user state
  };

  const onSubmit = async (e) => {
    // Handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    // Send a POST request to given endpoint
    await axios.post("http://localhost:8080/users", user);
    // Navigate to the home page after submission
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" placeholder="John Doe" name="name" value={name} onChange={(e) => InputHandler(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" placeholder="johnDoe123" name="username" value={username} onChange={(e) => InputHandler(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" placeholder="jdoe12@gmail.com" name="email" value={email} onChange={(e) => InputHandler(e)} />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to={"/"} className="btn btn-outline-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
