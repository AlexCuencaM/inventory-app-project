import { Typography } from "@mui/material";
import { useEffect } from "react";
import { LaboratoryTableView } from "./components/LaboratoryTableView";
import { LaboratoryCreate } from "./components/LaboratoryCreate";
import { useLaboratory } from "../../hooks/useLaboratory";
import { initialAppLaboratory } from "../../state/initialStates";
import { useForm } from "../../hooks/useForm";

export const LaboratoryView = () => {
  const { appLaboratories, getAllAsync } = useLaboratory();
  const { form, setForm, setStateForm } = useForm(initialAppLaboratory);

  useEffect(() => {
    getAllAsync().then();
  }, []);

  return (
    <>
      <Typography variant="h2">Laboratorios</Typography>
      <LaboratoryCreate />
      <LaboratoryTableView rows={appLaboratories} setStateForm={setStateForm} />
      {/* <LaboratoryEdit setStateForm={setStateForm} form={form} setForm={setForm}/> */}
    </>
  );
};
