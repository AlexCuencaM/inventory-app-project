import { Typography } from "@mui/material";
import { useEffect } from "react";
import { ProductTableView } from "./components/ProductTableView";
import { ProductCreate } from "./components/ProductCreate";
import { useProduct } from "../../hooks/useProduct";
import { initialAppProduct } from "../../state/initialStates";
import { useForm } from "../../hooks/useForm";
import { ProductEdit } from "./components/ProductEdit";

export const ProductView = () => {
  const { appProducts, getAllAsync } = useProduct();
  const { form, setForm, setStateForm } = useForm(initialAppProduct);

  useEffect(() => {
    getAllAsync().then();
  }, []);

  return (
    <>
      <Typography variant="h1">Productos</Typography>
      <ProductCreate />
      <ProductTableView rows={appProducts} setStateForm={setStateForm} />
      <ProductEdit setStateForm={setStateForm} form={form} setForm={setForm} />
    </>
  );
};
