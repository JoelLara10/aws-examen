import React, { useEffect, useState } from "react";

const API_URL = "http://3.12.123.131:5000/users/";
;

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.first_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar usuario..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
