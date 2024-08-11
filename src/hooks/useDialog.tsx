import { useInventoryContext } from './useInventoryContext';
export const useDialog = () => {
  const { openEditDialog, setOpenEditDialog, openCreateDialog, setOpenCreateDialog,
    openDeleteDialog, setOpenDeleteDialog } = useInventoryContext();
  return {
    openEditDialog,
    openDeleteDialog,
    openCreateDialog,
    handleOpenCreateDialog(){
        setOpenCreateDialog(true);
      },
    handleCloseCreateDialog(){
        setOpenCreateDialog(false);
      },

    handleOpenEditDialog(){
        setOpenEditDialog(true);
      },
    handleCloseEditDialog(){
        setOpenEditDialog(false);
      },
    handleOpenDeleteDialog(){
        setOpenDeleteDialog(true);
      },
    handleCloseDeleteDialog(){
        setOpenDeleteDialog(false);
      },
  }
}
