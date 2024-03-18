function AddUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" placeholder="John Doe" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" placeholder="johnDoe123" name="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" placeholder="jdoe12@gmail.com" name="email" />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <button type="submit" className="btn btn-outline-danger">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
