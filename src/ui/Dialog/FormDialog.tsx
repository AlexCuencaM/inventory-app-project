import React from 'react'
import { useDialog } from '../../hooks/useDialog';
import { Button, Dialog } from '@mui/material';
import { MyDialogTitle } from './components/MyDialogTitle';
import { MyDialogContent } from './components/MyDialogContent';
import { MyDialogActions } from './components/MyDialogActions';
interface FormDialogProps{
    title:string;
    children: JSX.Element;
    handleCancel?: () => void;
    handleSubmit: () => void;
}
export const FormDialog = ({title, children, handleCancel, handleSubmit}: FormDialogProps) => {
  const { openDialog, handleClose } = useDialog();
  const handleClick = () => {
    if(handleCancel){
        handleCancel();
    }
    handleClose();
  }
  const handleSubmitForm = () => {
    handleSubmit();
    handleClose();
  }
  return (
    <Dialog
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleSubmitForm();
          },
        }}
      >
        <MyDialogTitle title={title}/>
        <MyDialogContent>
            {children}
        </MyDialogContent> 
        <MyDialogActions>
            <>
                <Button onClick={handleClick}>Cancel</Button>
                <Button type="submit">Submit</Button>
            </>
        </MyDialogActions>
      </Dialog>
  )
}
