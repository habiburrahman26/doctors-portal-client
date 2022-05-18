import React from 'react';

const DoctorRow = ({ sl, name, specialty, img }) => {
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
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default DoctorRow;
