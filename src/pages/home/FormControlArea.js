import { useFormik } from "formik";
import React from "react";
import useFormControl from "../../hooks/useFormControl";
const FormControlArea = () => {
  const { initialValues, onSubmit, validate } = useFormControl();
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
  });

  return (
    <section className="bg-white rounded-lg shadow-lg p-2 md:p-3 lg:p-5">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h2 className="font-semibold text-lg md:text-xl">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 personal details">
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Name <small className="text-red-500"> &#9733;</small>
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                type="text"
                placeholder="Enter Name"
                className="input input-bordered"
              />
              {formik.errors.name && (
                <p className="text-error font-semibold">{formik.errors.name}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Date of Birth or Age
                  <small className="text-red-500"> &#9733;</small>
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.dateOfBirth}
                name="dateOfBirth"
                type="text"
                placeholder="DD/MM/YYY or Age in Years"
                className="input input-bordered"
              />
              {formik.errors.dateOfBirth && (
                <p className="text-error font-semibold">
                  {formik.errors.dateOfBirth}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Sex
                  <small className="text-red-500"> &#9733;</small>
                </span>
              </label>
              <select
                onChange={formik.handleChange}
                value={formik.values.sex}
                name="sex"
                className="select select-bordered w-full "
              >
                <option selected>Enter Sex</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              {formik.errors.sex && (
                <p className="text-error font-semibold">{formik.errors.sex}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Mobile
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.mobile}
                name="mobile"
                type="number"
                placeholder="Enter Mobile"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Govt Issued ID
                </span>
              </label>
              <div className="flex  flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <select
                  onChange={formik.handleChange}
                  value={formik.values.govtIdIssued}
                  name="govtIdIssued"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option selected>ID Type</option>
                  <option>U.S. Passport</option>
                  <option>U.S. Passport Card</option>
                  <option>Tribal Card</option>
                  <option>Foreign Passport</option>
                </select>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.govtId}
                  name="govtId"
                  type="text"
                  placeholder="Enter Govt ID"
                  className="input input-bordered  max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="font-semibold text-lg md:text-xl">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 contact-details">
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Guardian Details
                </span>
              </label>
              <div className="flex  flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <select
                  onChange={formik.handleChange}
                  value={formik.values.gurdianLevel}
                  name="gurdianLevel"
                  className="select select-bordered w-full "
                >
                  <option selected>Enter Level</option>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Sister</option>
                  <option>Brother</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Enter Gurdain Name
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.gurdianName}
                name="gurdianName"
                type="text"
                placeholder=" Enter Gurdain Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Emergency Contact Number
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.emergencyNumber}
                name="emergencyNumber"
                type="text"
                placeholder="Emergency Contact Number"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="font-semibold text-lg md:text-xl">Address Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 address-details">
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Address
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.address}
                name="address"
                type="text"
                placeholder="Enter Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  State
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.state}
                name="state"
                type="text"
                placeholder="Enter State"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  City
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.city}
                name="city"
                type="text"
                placeholder="Enter city/town/village"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Country
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.country}
                name="country"
                type="text"
                placeholder="Enter Country"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Pincode
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.pincode}
                name="pincode"
                type="text"
                placeholder="Enter Pincode"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="font-semibold text-lg md:text-xl">Other Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 other-details">
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Occupation
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.occupation}
                name="occupation"
                type="text"
                placeholder="Enter occupation"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Religion
                </span>
              </label>
              <select
                onChange={formik.handleChange}
                value={formik.values.religion}
                name="religion"
                className="select select-bordered w-full "
              >
                <option selected>Enter Religion</option>
                <option>Islam</option>
                <option>Hinduism</option>
                <option>Buddhism</option>
                <option>Christianity</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Marital Status
                </span>
              </label>
              <select
                onChange={formik.handleChange}
                value={formik.values.mariatal}
                name="mariatal"
                className="select select-bordered w-full "
              >
                <option selected>Enter Marital Status</option>
                <option>Unmarried</option>
                <option>Married</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Blood Group
                </span>
              </label>
              <select
                onChange={formik.handleChange}
                value={formik.values.blood}
                name="blood"
                className="select select-bordered w-full "
              >
                <option selected>Group</option>
                <option>A+</option>
                <option>A-</option>
                <option> B+</option>
                <option> B-</option>
                <option> O+</option>
                <option> O-</option>
                <option>AB+ </option>
                <option>AB- </option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text text-base font-normal">
                  Nationality
                </span>
              </label>

              <input
                onChange={formik.handleChange}
                value={formik.values.nationality}
                name="nationality"
                type="text"
                placeholder="Enter Nationality"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            type="reset"
            className="btn btn-md bg-transparent border border-red-600 text-red-500"
          >
            CANCEL
          </button>
          <button type="submit" className="btn btn-md btn-secondary text-white">
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormControlArea;
