import { Link } from "react-router-dom";

const ViewUser = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header p-4">
              <ul className="list-group list-group-flush p-2">
                <li className="list-group-item">
                  <b>Name:</b>
                </li>
                <li className="list-group-item">
                  <b>Username:</b>
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-primary my-2" to={"/"}>
              Go back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
