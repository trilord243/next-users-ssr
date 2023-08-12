import React from "react";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data.data);
  return data.data;
}

async function IndexPage() {
  const users = await fetchUsers();
  console.log(users);
  return (
    <>
      <h1>Users</h1>
      {JSON.stringify(users)}
    </>
  );
}

export default IndexPage;
