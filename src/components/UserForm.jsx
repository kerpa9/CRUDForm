import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../components/styles/UserForm.css";

const UserForm = ({
  createUser,
  update,
  updateUsers,
  setUpdate,
  isOpen,
  closeModal,
}) => {
  const { handleSubmit, register, reset } = useForm();
  useEffect(() => {
    reset(update);
  }, [update]);

  const submit = (data) => {
    if (update) {
      updateUsers("/users", update?.id, data);
      setUpdate();
    } else {
      createUser("/users", data);
    }

    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <>
      <div className={`userForm ${isOpen && "is_open"} `} onClick={closeModal}>
        <form className="userForm_form" onSubmit={handleSubmit(submit)}>
          <div className="userForm_header">
            <h2>{createUser && "New"} </h2>
            <h2>{update && "Edit"} </h2>
            <button
              className="userForm_close"
              type="button"
              onClick={closeModal}
            >
              <div></div>
              <div></div>
            </button>
          </div>
          <div className="useForm_items" onClick={handleModalContainerClick}>
            <div className="userForm_item">
              <label htmlFor="first_name">First name</label>
              <input
                {...register("first_name")}
                id="first_name"
                type="text"
                placeholder="First name"
              />
            </div>

            <div className="userForm_item">
              <label htmlFor="last_name">Last name</label>
              <input
                {...register("last_name")}
                id="last_name"
                type="text"
                placeholder="Last name"
              />
            </div>

            <div className="userForm_item">
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="userForm_item">
              <label htmlFor="password">Password</label>
              <input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="userForm_item">
              <label htmlFor="birthday">Birthday</label>
              <input {...register("birthday")} id="birthday" type="date" />
            </div>
          </div>
          <button className="userForm_btn">
            {update ? "Update user" : "   Add new user"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
