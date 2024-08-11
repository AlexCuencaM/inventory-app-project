import { Button, Paper, TextField } from "@mui/material";
import { useDialog } from "../../../hooks/useDialog";
import { FormDialog } from "../../../ui/Dialog/FormDialog";

export const ProductCreate = () => {
    const {handleClickOpen} = useDialog();
    const handleClick = () => {
      handleClickOpen();
    }
    return (
      <>
          <Paper sx={{marginBottom: 6}}>
              <Button onClick={handleClick}>
                  Crear producto
              </Button>
          </Paper>
          <FormDialog title={"Crear producto"} handleSubmit={function (): void {
                throw new Error("Function not implemented.");
            } }>
              <TextField
                  variant="filled"
                  fullWidth
                  name='Product'
                  label="Producto"
                  placeholder='ej: amoxicilina'
                  required
                      // value={form.Productname}
                      // onChange={e => {
                      //     setForm(e.target.value, "Productname")
                      // }}
                  />
          </FormDialog>
      </>
    )
  }