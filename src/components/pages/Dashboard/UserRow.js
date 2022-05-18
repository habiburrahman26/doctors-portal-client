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
        console.log(res);
        if (res.status === 403) {
          throw new Error('Failed to make an admin');
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
      <td>
        {role !== 'admin' && (
          <button className="btn btn-xs mr-2" onClick={makeAdmin}>
            make admin
          </button>
        )}
        {role === 'admin' && <div className="badge badge-primary">Admin</div>}
        <button className="btn btn-xs">X</button>
      </td>
    </tr>
  );
};

export default UserRow;
