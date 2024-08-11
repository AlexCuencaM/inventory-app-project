import { DialogActions } from "@mui/material"
interface MyDialogActionsProps{
    children: JSX.Element;
}
export const MyDialogActions = ({children}: MyDialogActionsProps) => {
  return (
    <DialogActions>
        {children}
    </DialogActions>
  )
}
