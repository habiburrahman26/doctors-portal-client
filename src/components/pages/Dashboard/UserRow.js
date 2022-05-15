import { toast } from 'react-toastify';

const UserRow = ({ rowNumber, email, refetch, role }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          throw new Error(`${res.statusText} ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        refetch();
        toast.success('Admin created successfully');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <tr>
      <td>{rowNumber}</td>
      <td>{email}</td>
      {role !== 'admin' && (
        <button class="btn btn-xs mr-2" onClick={makeAdmin}>
          make admin
        </button>
      )}
      {role === 'admin' && <div class="badge badge-primary">Admin</div>}
      <button class="btn btn-xs">X</button>
    </tr>
  );
};

export default UserRow;
