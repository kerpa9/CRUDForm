import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const [isOpenMessage, setIsOpenMessage] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const openModalMessage = () => setIsOpenMessage(true);
  const closeModal = () => setIsOpen(initialValue);
  const closeModalMessage = () => setIsOpenMessage(initialValue);

  return [
    isOpen,
    openModal,
    closeModal,
    closeModalMessage,
    openModalMessage,
    isOpenMessage,
  ];
};
