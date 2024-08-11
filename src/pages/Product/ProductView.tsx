import { Typography } from '@mui/material'
import React from 'react'
import { ProductTableView } from './components/ProductTableView'
import { ProductCreate } from './components/ProductCreate'

export const ProductView = () => {

//   useEffect(() => {
//     repo.GetAllAsync().then(res => {
        
//     })
//   }, [])

  return (
    <>
    <Typography variant="h1">
        Productos
    </Typography>
    <ProductCreate/>
    <ProductTableView rows={[]}/>
    {/* <ProductEdit/> */}
</>
  )
}
