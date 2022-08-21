import React from "react";

const UserRow = ({
  user: { personalDetails, addressDetails, contactDetails, otherDetails },
}) => {
  return (
    <tr>
      <th>
        <h2>Name : {personalDetails.name}</h2>
        <p> Date of Birth or Age : {personalDetails.dateOfBirth}</p>
      </th>
      <td>
        <h2>Gurdian Level : {contactDetails.gurdianLevel}</h2>
        <p>Gurdian Name : {contactDetails.gurdianName}</p>
      </td>
      <td>
        <p>Address : {addressDetails.address}</p>
        <p>City : {addressDetails.city}</p>
      </td>
      <td>
        <p>Occupation : {otherDetails.occupation}</p>
        <p>Blood Group : {otherDetails.blood}</p>
      </td>
    </tr>
  );
};

export default UserRow;
