import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const results = await axios.get("http://localhost:8080/users");
    console.log(results.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-hover border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
