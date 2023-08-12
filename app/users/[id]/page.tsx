async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  console.log(data);
  return data.data;
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      <h1> {JSON.stringify(user)} </h1>
    </div>
  );
}

export default UsersPage;
