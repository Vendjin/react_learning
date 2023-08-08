import React, { FC, useState } from "react";
import { useCreateUserMutation, useDeleteUserMutation, useFetchDomainUsersQuery, useUpdateUserMutation } from "../../api/usersApi/usersApi";
import { ICreateDomainUsers, IDomainUsers } from "../../common/types/users/usersType";
interface ItemProps {
  user: IDomainUsers
  remove: (user: IDomainUsers) => void
  update: (user: IDomainUsers) => void
}

const UserItem: FC<ItemProps> = ({ user, remove, update }) => {

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(user)
  }

  const handleUpdate = (event: React.MouseEvent) => {
    const givename = prompt() || ''
    const reddy = prompt() || ''
    update({ ...user, givename, reddy })
  }

  return (
    <div onClick={handleUpdate}>
      {user.sid}. {user.givename} : {user.reddy}
      <button onClick={handleRemove}>Delete</button>
    </div>
  )
}


const AnythingPage1 = () => {
  const { data: users } = useFetchDomainUsersQuery();
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const [user, setUser] = useState<ICreateDomainUsers>({
    // sid: uuid(),
    surname: '',
    givename: '',
    samaccountname: '',
    reddy: '',
    // oneCUser: false
  })

  const handleCreate = async (event: any) => {
    event.preventDefault();
    await createUser(user).unwrap();
  }

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setUser({ ...user, [name]: newValue });
  };

  const handleRemove = async (user: IDomainUsers) => {
    await deleteUser(user.id).unwrap();
  }

  const handleUpdate = async (user: IDomainUsers) => {
    await updateUser(user).unwrap();
  }

  return (
    <>
      <form onSubmit={handleCreate}>
        <div>
          <input
            type="text"
            name="surname"
            value={user.surname}
            onChange={handleChange}
            required
            placeholder="surname"
          />
        </div>

        <div>
          <input
            type="text"
            name="givename"
            value={user.givename}
            onChange={handleChange}
            required
            placeholder="givename"
          />
        </div>

        <div>
          <input
            type="text"
            name="samaccountname"
            value={user.samaccountname}
            onChange={handleChange}
            required
            placeholder="samaccountname"
          />
        </div>

        <div>
          <input
            type="text"
            name="reddy"
            value={user.reddy}
            onChange={handleChange}
            required
            placeholder="reddy"
          />
        </div>

        {/* <div>
          <label htmlFor="1CUser">
            <input
              type="checkbox"
              name="oneCUser"
              checked={user.oneCUser}
              onChange={handleChange}
            />{' '}
            Is 1CUser
          </label>
        </div> */}
        <button type="submit">Create User</button>
      </form>


      <div>
        {users && users.map(user =>
          <UserItem key={user.id} user={user} remove={handleRemove} update={handleUpdate} />
        )}
      </div>
    </>
  );
}

export default AnythingPage1