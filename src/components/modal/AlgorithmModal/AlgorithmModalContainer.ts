export const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    overflow: "hidden",
  },
};

export interface algorithmModalProps {
  isRed: boolean;
  isHeading: boolean;
  children: React.ReactNode;
  enterEvent: () => {};
  setTitle: (value: string) => {};
  setContent: (value: string) => {};
}
