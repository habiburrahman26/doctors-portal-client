import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ sl, _id, name, specialty, img, refetch }) => {
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/doctor/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(({ data }) => {
        if (data.deletedCount) {
          toast.success(`$Doctor ${name} deleted successfully`);
          refetch()
        }
      });
  };

  return (
    <tr>
      <th>{sl}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button
          className="btn btn-xs btn-error"
          onClick={() => deleteHandler(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
