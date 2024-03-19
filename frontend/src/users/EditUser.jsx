import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
  // Initialize useNavigate hook to navigate endpoints.
  let navigate = useNavigate();

  // Extract the 'id' parameter from the URL.
  const { id } = useParams();

  const [user, setUser] = useState({
    // useState hook to manage user input fields
    name: "",
    username: "",
    email: "",
  });

  // Destructure user state to access individual fields directly
  const { name, username, email } = user;

  const InputHandler = (e) => {
    // Wait for input changes to update user state
    setUser({ ...user, [e.target.name]: e.target.value });
    // Spread the existing user state & update the field that changed
  };

  useEffect(() => {
    // load user data when the component mounts.
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    // Handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    // Send a POST request to given endpoint
    await axios.put(`http://localhost:8080/users/${id}`, user);
    // Navigate to the home page after submission
    navigate("/");
  };

  const loadUser = async () => {
    // Fetch user data from the server and update the state.
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    // Update the user state with the fetched data.
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
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

export default EditUser;
