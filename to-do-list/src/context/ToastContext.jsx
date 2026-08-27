import { createContext, useState } from "react";

export const ToastContext = createContext({});

export function ToastContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleOpenSnackbar = (newMessage, newSeverity) => {
    setMessage(newMessage);
    setSeverity(newSeverity);
    setOpen(true);
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <ToastContext.Provider
      value={{
        open,
        message,
        severity,
        handleOpenSnackbar,
        handleCloseSnackbar,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}