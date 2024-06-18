import { useState } from "react";
import "../components/styles/userCard.css";
import Loader from "./Loader";
const UserCard = ({
  user,
  setUpdate,
  openModal,
  openModalMessage,
  isOpenMessage,
  closeModalMessage,
  deleteUser,
}) => {
  const [isActive, setIsActive] = useState();

  const handleModalMessage = () => {
    setIsActive(true);
    closeModalMessage(true);
  };
  const handleDelete = () => {
    deleteUser("/users", user.id);
  };
  const handleClose = () => {
    setIsActive(false);
  };

  const handleEdit = () => {
    setUpdate(user);
    openModal();
  };

  return (
    <article className="userCard">
      <h2 className="userCard_name">
        {user.first_name} {user.last_name}
      </h2>
      <hr />
      <ul className="userCard_list">
        <li className="userCard_item">
          <span className="userCard_itemEmail">EMAIL </span>
          <span>{user.email}</span>
        </li>
        <li className="userCard_item">
          <span className="userCard_itemBirth">BIRTHDAY </span>
          <span>
            {
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            }
            {user.birthday}
          </span>
        </li>
      </ul>
      <hr />

      <div className="userCard_btn">
        <button className="userCard_del" onClick={handleModalMessage}>
          <svg
            fill="#d41111"
            height="200px"
            width="200px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.648 488.648"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                id="XMLID_349_"
                d="M486.156,356.878l-19.735-63.376c11.032-14.164,14.651-32.946,9.175-50.575l-15.339-49.31 c-5.485-17.629-19.144-31.04-36.268-36.437l-19.728-63.353c-9.016-28.99-39.959-45.266-68.963-36.235l-21.513,6.708 c-10.744,3.34-17.11,14.061-15.468,24.852c-1.386-2.186-2.97-4.243-4.78-6.14c-7.462-7.798-17.782-12.21-28.567-12.21H39.519 c-10.785,0-21.112,4.412-28.559,12.21C3.498,90.809-0.449,101.315,0.041,112.09l12.402,277.628 c1.464,24.578,21.913,43.827,46.563,43.827h186.478c24.627,0,45.09-19.279,46.581-43.946l12.392-277.508 c0.041-0.85-0.128-1.674-0.144-2.513l91.157,292.855l4.764,15.292c3.684,11.858,16.324,18.496,28.183,14.804l21.496-6.686 C478.919,416.804,495.18,385.883,486.156,356.878z M123.503,328.384c0,11.512-9.375,20.871-20.873,20.871 c-11.504,0-20.855-9.359-20.855-20.871V141.777c0-11.496,9.351-20.871,20.855-20.871c11.497,0,20.873,9.375,20.873,20.871V328.384z M222.707,328.384c0,11.512-9.351,20.871-20.865,20.871c-11.512,0-20.88-9.359-20.88-20.871V141.777 c0-11.496,9.368-20.871,20.88-20.871c11.514,0,20.865,9.375,20.865,20.871V328.384z M439.792,393.329l-10.487,3.283L334.912,93.363 l10.506-3.274c11.095-3.443,22.913,2.777,26.355,13.842l22.69,72.912c2.066,6.613,7.886,11.281,14.739,11.922 c8.686,0.767,15.972,6.644,18.565,14.97l15.341,49.311c2.594,8.31-0.056,17.285-6.782,22.881c-5.284,4.388-7.412,11.561-5.371,18.15 l22.704,72.912C457.118,378.07,450.898,389.887,439.792,393.329z"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button className="userCard_edit" onClick={handleEdit}>
          <svg
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.265 4.16231L19.21 5.74531C19.3978 5.9283 19.5031 6.17982 19.5015 6.44201C19.5 6.70421 19.3919 6.9545 19.202 7.13531L17.724 8.93531L12.694 15.0723C12.6069 15.1749 12.4897 15.2473 12.359 15.2793L9.75102 15.8793C9.40496 15.8936 9.10654 15.6384 9.06702 15.2943L9.18902 12.7213C9.19806 12.5899 9.25006 12.4652 9.33702 12.3663L14.15 6.50131L15.845 4.43331C16.1743 3.98505 16.7938 3.86684 17.265 4.16231Z"
                stroke="#adabba"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M5.5 18.2413C5.08579 18.2413 4.75 18.5771 4.75 18.9913C4.75 19.4056 5.08579 19.7413 5.5 19.7413V18.2413ZM19.2 19.7413C19.6142 19.7413 19.95 19.4056 19.95 18.9913C19.95 18.5771 19.6142 18.2413 19.2 18.2413V19.7413ZM14.8455 6.22062C14.6904 5.83652 14.2534 5.65082 13.8693 5.80586C13.4852 5.9609 13.2995 6.39796 13.4545 6.78206L14.8455 6.22062ZM17.8893 9.66991C18.2933 9.57863 18.5468 9.17711 18.4556 8.77308C18.3643 8.36904 17.9628 8.1155 17.5587 8.20678L17.8893 9.66991ZM5.5 19.7413H19.2V18.2413H5.5V19.7413ZM13.4545 6.78206C13.6872 7.35843 14.165 8.18012 14.8765 8.8128C15.6011 9.45718 16.633 9.95371 17.8893 9.66991L17.5587 8.20678C16.916 8.35198 16.3609 8.12551 15.8733 7.69189C15.3725 7.24656 15.0128 6.63526 14.8455 6.22062L13.4545 6.78206Z"
                fill="#adabba"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>

      <section className={`userFormMessage ${isActive && "is_openMessage"} `}>
        <div className="userFormMessageCont">
          <button
            className="userFormMessage_close"
            type="button"
            onClick={handleClose}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect width="24" height="24" fill="white"></rect>{" "}
                <path
                  d="M7 17L16.8995 7.10051"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M7 7.00001L16.8995 16.8995"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>

          <h2 className="userFormMessage_h2">¿Delete user?</h2>
          <span className="userFormMessage_p ">
            Press this button to delete:
            <span>
              <br />
              <b>
                User: {user.first_name} {user.last_name}
              </b>
            </span>
          </span>
          <button
            className="userFormMessage_btnConfirm "
            onClick={handleDelete}
          >
            Accept
          </button>
        </div>
      </section>
    </article>
  );
};

export default UserCard;
