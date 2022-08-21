import { useState } from "react";
import FormControlArea from "./FormControlArea";
import Users from "./Users";
const Home = () => {
  const [users, setUsers] = useState([]);
  const initialValues = {
    name: "",
    dateOfBirth: "",
    sex: "",
    mobile: "",
    govtIdIssued: "",
    govtId: "",
    gurdianLevel: "",
    gurdianName: "",
    emergencyNumber: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    occupation: "",
    religion: "",
    mariatal: "",
    blood: "",
    nationality: "",
  };
  const onSubmit = (values) => {
    const newUser = {
      personalDetails: {
        name: values.name,
        dateOfBirth: values.dateOfBirth,
        sex: values.sex,
        mobile: values.mobile,
        govtIdIssued: values.govtIdIssued,
        govtId: values.govtId,
      },
      contactDetails: {
        gurdianLevel: values.gurdianLevel,
        gurdianName: values.gurdianName,
        emergencyNumber: values.emergencyNumber,
      },
      addressDetails: {
        address: values.address,
        state: values.state,
        city: values.city,
        country: values.country,
        pincode: values.pincode,
      },
      otherDetails: {
        occupation: values.occupation,
        religion: values.religion,
        mariatal: values.mariatal,
        blood: values.blood,
        nationality: values.nationality,
      },
    };
    setUsers([...users, newUser]);
  };

  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "Name is Required";
    }
    if (!values.dateOfBirth) {
      error.dateOfBirth = "Date of Birth or Age is Required";
    }
    if (!values.sex) {
      error.sex = "Sex is Required";
    }
    return error;
  };

  return (
    <main className="w-[90%] mx-auto my-10">
      <FormControlArea
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      />
      <Users users={users} />
    </main>
  );
};

export default Home;
