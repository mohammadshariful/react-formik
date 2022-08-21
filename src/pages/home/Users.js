import UserRow from "./UserRow";
const Users = ({ users }) => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-2 md:p-3 lg:p-5 mt-4">
      <h2 className="text-center font-semibold text-xl lg:text-2xl">
        All Users Details Here
      </h2>
      <div class="overflow-x-auto mt-3">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Personal Details</th>
              <th>Contact Details</th>
              <th>Address Details</th>
              <th>Other Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
