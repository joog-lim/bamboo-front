const modalController = (
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return [openModal, closeModal];
};

export default modalController;

export const defaultStyles: ReactModal.Styles = {
  overlay: {
    zIndex: 3,
    position: "fixed",
    inset: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000033",
  },
  content: {
    zIndex: 3,
    overflow: "hidden",
    borderRadius: "5px",
    outline: "none",
    flexDirection: "column",
    maxWidth: "50vw",
    maxHeight: "50vh",
    width: "50vw",
    height: "50vh",
    background: "#FFFFFF",
    border: "none",
    padding: "2.5rem",
    boxSizing: "border-box",
    position: "relative",
  },
};
