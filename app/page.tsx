import User from "@/components/User";
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
      {users.map((user: any) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}

export default IndexPage;
