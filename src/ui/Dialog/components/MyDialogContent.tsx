import { DialogContent } from '@mui/material'
interface MyDialogContentProps{
    children: JSX.Element;
}
export const MyDialogContent = ({children}: MyDialogContentProps) => {
  return (
    <DialogContent>
        {children}
    </DialogContent>
  )
}
