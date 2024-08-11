import { Button, Dialog } from '@mui/material';
import { MyDialogTitle } from './components/MyDialogTitle';
import { MyDialogContent } from './components/MyDialogContent';
import { MyDialogActions } from './components/MyDialogActions';
interface SimpleDialogProps{
    title:string;
    children: JSX.Element;
    openDialog: boolean;
    handleDialog: () => void;
}
export const SimpleDialog = ({title, children, openDialog, handleDialog}: SimpleDialogProps) => {
  const handleClick = () => {
    handleDialog();
  }
  return (
    <Dialog
        open={openDialog}
        onClose={handleDialog}
      >
        <MyDialogTitle title={title}/>
        <MyDialogContent>
            {children}
        </MyDialogContent> 
        <MyDialogActions>
            <Button onClick={handleClick}>Close</Button>
        </MyDialogActions>
      </Dialog>
  )
}
