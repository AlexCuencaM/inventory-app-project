import { Typography } from "@mui/material";
import { useEffect } from "react";
import { InventoryTableView } from "./components/InventoryTableView";
import { useInventory } from "../../hooks/useInventory";
import { initialAppInventory } from "../../state/initialStates";
import { useForm } from "../../hooks/useForm";

export const InventoryView = () => {
  const { appInventory, getAllAsync } = useInventory();
  const { form, setForm, setStateForm } = useForm(initialAppInventory);

  useEffect(() => {
    getAllAsync().then();
  }, [getAllAsync]);

  return (
    <>
      <Typography variant="h2">Inventarios</Typography>
      <InventoryTableView rows={appInventory} setStateForm={setStateForm} />
    </>
  );
};
