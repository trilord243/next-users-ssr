"use client";
import { useRouter } from "next/navigation";
import React from "react";

function User({ user }) {
  const router = useRouter();
  return (
    <li onClick={() => router.push(`/users/${user.id}`)}>
      <div>
        <h5>
          {user.id} {user.first_name} {user.last_name}
        </h5>
        <p>{user.email} </p>
      </div>
      <img src={user.avatar} alt={user.email} />
    </li>
  );
}

export default User;
