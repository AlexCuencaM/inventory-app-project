import { Typography } from "@mui/material";
import { useEffect } from "react";
import { ProviderTableView } from "./components/ProviderTableView";
import { ProviderCreate } from "./components/ProviderCreate";
import { useProvider } from "../../hooks/useProvider";
import { initialAppProvider } from "../../state/initialStates";
import { useForm } from "../../hooks/useForm";
import { ProviderEdit } from "./components/ProviderEdit";

export const ProviderView = () => {
  const { appProviders, getAllAsync } = useProvider();
  const { form, setForm, setStateForm } = useForm(initialAppProvider);

  useEffect(() => {
    getAllAsync().then();
  }, []);

  return (
    <>
      <Typography variant="h1">Provideros</Typography>
      <ProviderCreate />
      <ProviderTableView rows={appProviders} setStateForm={setStateForm} />
      <ProviderEdit setStateForm={setStateForm} form={form} setForm={setForm} />
    </>
  );
};
