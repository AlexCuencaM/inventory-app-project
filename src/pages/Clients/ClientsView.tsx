import { useEffect } from "react";
import { useClient } from "../../hooks/useClient";
import { useForm } from "../../hooks/useForm";
import { Typography } from "@mui/material";
import { ClientTableView } from "./components/ClientTableView";
import { ClientCreate } from "./components/ClientCreate";
import { initialAppClient } from "../../state/initialStates";
import { ClientEdit } from "./components/ClientEdit";

export const ClientsView = () => {
  const { appClients, getAllAsync } = useClient();
  const { form, setForm, setStateForm } = useForm(initialAppClient);

  useEffect(() => {
    getAllAsync().then();
  }, []);

  return (
    <>
      <Typography variant="h2">Laboratorios</Typography>
      <ClientCreate />
      <ClientTableView rows={appClients} setStateForm={setStateForm} />
      <ClientEdit setStateForm={setStateForm} form={form} setForm={setForm} />
    </>
  );
};
