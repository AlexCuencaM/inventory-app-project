import { useInventoryContext } from './useInventoryContext';
export const useDialog = () => {
  const {openDialog, setOpenDialog } = useInventoryContext();
  return {
    openDialog,
    handleClickOpen(){
        setOpenDialog(true);
      },
    handleClose(){
        setOpenDialog(false);
      }
  }
}
