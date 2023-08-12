"use client";
import { useRouter } from "next/navigation";
import React from "react";

function User({ user }) {
  const router = useRouter();
  return (
    <ul className="list-group">
      <li
        className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
        onClick={() => router.push(`/users/${user.id}`)}
      >
        <div>
          <h5>
            {user.id} {user.first_name} {user.last_name}
          </h5>
          <p>{user.email} </p>
        </div>
        <img
          src={user.avatar}
          alt={user.email}
          style={{ borderRadius: "50%" }}
        />
      </li>
    </ul>
  );
}

export default User;
