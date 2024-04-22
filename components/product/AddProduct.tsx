import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CirclePlus } from "lucide-react";
import ProductForm from "./ProductForm";

const AddProduct = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <Button>
          <CirclePlus className="w-4 mr-2" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>General Information</DialogTitle>
        </DialogHeader>
        <ProductForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
