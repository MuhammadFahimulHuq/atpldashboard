
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { CirclePlus, RefreshCcw } from 'lucide-react'
import ProductForm from './ProductForm'

const UpdateProduct = () => {
  return (
    <Dialog>
    <DialogTrigger><Button  className='rounded-full'><RefreshCcw className='w-4'/></Button></DialogTrigger>
    <DialogContent >
      <DialogHeader>
        <DialogTitle>General Information</DialogTitle>
      </DialogHeader>
      <ProductForm />
    </DialogContent>
  </Dialog>
  )
}

export default UpdateProduct