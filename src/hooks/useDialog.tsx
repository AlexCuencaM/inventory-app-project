import { useInventoryContext } from './useInventoryContext';
export const useDialog = () => {
  const { openEditDialog, setOpenEditDialog, openCreateDialog, 
    setOpenCreateDialog, openDeleteDialog, setOpenDeleteDialog,
    openDetailDialog, setOpenDetailDialog
  } = useInventoryContext();
  return {
    openEditDialog,
    openDeleteDialog,
    openCreateDialog,
    openDetailDialog,
    handleOpenDetailDialog(){
        setOpenDetailDialog(true);
      },
    handleCloseDetailDialog(){
        setOpenDetailDialog(false);
      },

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
