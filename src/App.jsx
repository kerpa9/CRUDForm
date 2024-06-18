import { useEffect, useState } from "react";
import "./App.css";
import useCRUD from "./hooks/useCRUD";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import { useModal } from "./hooks/useModal";

function App() {
  const [users, getUsers, createUser, deleteUser, updateUsers] = useCRUD();
  const [
    isOpenModal,
    openModal,
    closeModal,
    closeModalMessage,
    openModalMessage,
    isOpenMessage,
  ] = useModal(false);

  const [update, setUpdate] = useState();

  useEffect(() => {
    getUsers("/users");
  }, []);

  const InitialData = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  };

  const handleForm = () => {
    openModal(true);
    {
      setUpdate(InitialData) || setUpdate();
    }
  };

  return (
    <>
      <div className="app">
        <div className="app_header">
          <h1>Users</h1>
          <button className="app_btn" onClick={handleForm}>
            + Create new user
          </button>
        </div>
        <UserForm
          createUser={createUser}
          update={update}
          updateUsers={updateUsers}
          setUpdate={setUpdate}
          isOpen={isOpenModal}
          closeModal={closeModal}
        />
        <section className="app_container">
          {users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdate={setUpdate}
              openModal={openModal}
              openModalMessage={openModalMessage}
              isOpenMessage={isOpenMessage}
              closeModalMessage={closeModalMessage}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
