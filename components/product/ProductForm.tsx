import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
const ProductForm = () => {
  return (
    <form className="space-y-2">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="productName" className="font-bold">
          Product Name
        </Label>
        <Input id="productName" type="text" placeholder="Product Name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="Brand" className="font-bold">
          Brand
        </Label>
        <Input id="Brand" type="text" placeholder="Brand Name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="price" className="font-bold">
          Price
        </Label>
        <Input id="price" type="number" placeholder="$1000" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message" className="font-bold">
          Description
        </Label>
        <Textarea placeholder="Type  description here." id="message" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture" className="font-bold">
          Images
        </Label>
        <Input id="picture" type="file" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ProductForm;
