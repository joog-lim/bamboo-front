import { Styles } from "react-modal";

export const customStyles: Styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    overflow: "hidden",
    zIndex: 10,
  },
};

export interface algorithmModalProps {
  isRed: boolean;
  isHeading: boolean;
  isReason: boolean;
  children: React.ReactNode;
  algorithmId: string;
}
