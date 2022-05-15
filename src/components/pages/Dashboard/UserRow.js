const UserRow = ({ rowNumber, email, refetch, role }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  console.log(role);

  return (
    <tr>
      <td>{rowNumber}</td>
      <td>{email}</td>
      {role !== 'admin' && (
        <button class="btn btn-xs mr-2" onClick={makeAdmin}>
          make admin
        </button>
      )}
      {role === 'admin' && (
        <div class="badge badge-primary">Admin</div>
      )}
      <button class="btn btn-xs">X</button>
    </tr>
  );
};

export default UserRow;
