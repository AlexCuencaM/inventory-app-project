import { DialogTitle } from '@mui/material'

interface MyDialogTitleProps{
    title: string;
}
export const MyDialogTitle = ({title}:MyDialogTitleProps) => {
  return (
    <DialogTitle>
        {title}
    </DialogTitle>
  )
}
