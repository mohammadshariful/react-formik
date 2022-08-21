import React from "react";

const FormControlArea = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-2 md:p-3 lg:p-5">
      <form>
        <div>
          <h2 className="font-semibold text-lg md:text-xl">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 personal details">
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">Name</span>
              </label>

              <input
                type="text"
                placeholder="Enter Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Date of Birth or Age
                </span>
              </label>

              <input
                type="text"
                placeholder="DD/MM/YYY or Age in Years"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">Sex</span>
              </label>
              <select class="select select-bordered w-full ">
                <option disabled selected>
                  Enter Sex
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Mobile
                </span>
              </label>

              <input
                type="number"
                placeholder="Enter Mobile"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Govt Issued ID
                </span>
              </label>
              <div className="flex  flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <select class="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    ID Type
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter Govt ID"
                  class="input input-bordered  max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="font-semibold text-lg md:text-xl">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 contact-details">
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Govt Issued ID
                </span>
              </label>
              <div className="flex  flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <select class="select select-bordered w-full ">
                  <option disabled selected>
                    ID Type
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter Govt ID"
                  class="input input-bordered  max-w-xs"
                />
              </div>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">Email</span>
              </label>

              <input
                type="email"
                placeholder="Enter Email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Emergency Contact Number
                </span>
              </label>

              <input
                type="text"
                placeholder="Emergency Contact Number"
                class="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="font-semibold text-lg md:text-xl">Address Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 address-details">
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Address
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter Address"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">State</span>
              </label>

              <input
                type="text"
                placeholder="Enter State"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">City</span>
              </label>

              <input
                type="text"
                placeholder="Enter city/town/village"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Country
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter Country"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Pincode
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter Pincode"
                class="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="font-semibold text-lg md:text-xl">Other Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 other-details">
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Occupation
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter occupation"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Religion
                </span>
              </label>
              <select class="select select-bordered w-full ">
                <option disabled selected>
                  Enter Religion
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Marital Status
                </span>
              </label>
              <select class="select select-bordered w-full ">
                <option disabled selected>
                  Enter Marital Status
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Blood Group
                </span>
              </label>
              <select class="select select-bordered w-full ">
                <option disabled selected>
                  Group
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text text-base font-normal">
                  Nationality
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter Nationality"
                class="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button type="reset" className="btn btn-md btn-warning">
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
