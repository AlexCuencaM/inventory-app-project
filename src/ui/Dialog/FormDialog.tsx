import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { MyDialogTitle } from "./components/MyDialogTitle";
import { MyDialogContent } from "./components/MyDialogContent";
import { MyDialogActions } from "./components/MyDialogActions";

interface FormDialogProps {
  title: string;
  children: JSX.Element;
  openDialog: boolean;
  handleDialog: () => void;
  handleCancel?: () => void;
  handleSubmit: () => void;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl"; // Define maxWidth options
  fullWidth?: boolean; // Option to make dialog full width
}

export const FormDialog = ({
  title,
  children,
  handleCancel,
  handleSubmit,
  openDialog,
  handleDialog,
  maxWidth = "sm", // Default value
  fullWidth = true, // Default value
}: FormDialogProps) => {
  const handleClick = () => {
    if (handleCancel) {
      handleCancel();
    }
    handleDialog();
  };

  const handleSubmitForm = () => {
    handleSubmit();
    handleDialog();
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleDialog}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleSubmitForm();
        },
      }}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      <MyDialogTitle title={title} />
      <MyDialogContent>{children}</MyDialogContent>
      <MyDialogActions>
        <>
          <Button onClick={handleClick}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </>
      </MyDialogActions>
    </Dialog>
  );
};
