import React, { ReactNode } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import StarRating from "./StarRating";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import SlidingProductCard from "./SlidingProductCard";
import { Product } from "@/interfaces/product.interface";
import productData from "@/util/product";

const ProductDetail: React.FC<{ id: string }> = ({ id }) => {
  const { products } = productData;
  const product = products.find((product) => product.product_id === id);

  return (
    <Drawer>
      <DrawerTrigger>
        {" "}
        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
          View Detail
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90vh] ">
        <DrawerClose className="absolute top-[-40px] right-3">
          <X className="text-white" />
        </DrawerClose>
        <DrawerHeader>
          <DrawerTitle>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Product</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Detail</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-[90vh] overflow-auto px-4 ">
          <div className="grid grid-cols-1 space-x-0 md:grid md:grid-cols-2 md:space-x-5 ">
            <div className="grid grid-cols-2 gap-5  max-h-[620px]">
              <img
                className="h-[300px]   w-full object-cover object-center"
                src={product?.images[0]}
                alt="blog"
              />
              <img
                className="h-[300px]   w-full object-cover object-center"
                src={product?.images[1]}
                alt="blog"
              />
              <img
                className="h-[300px]   w-full object-cover object-center"
                src={product?.images[2]}
                alt="blog"
              />
              <img
                className="h-[300px]   w-full object-cover object-center"
                src={product?.images[2]}
                alt="blog"
              />
            </div>
            <div className="mt-8 md:mt-0">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {product?.manufacturer}
              </h2>
              <h1 className="title-font text-2xl font-bold text-gray-900 mb-3">
                {product?.name}
              </h1>
              <StarRating average={4.8} />
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mt-4 mb-1">
                Feature
              </h2>
              <div className="flex flex-wrap gap-1 mt-2">
                {product?.features.map((feature: string, index: number) => (
                  <Badge key={index}>{feature}</Badge>
                ))}
              </div>
              <div className="mt-10">
                <p className="text-3xl">${product?.price}</p>
              </div>
              <div className="mt-10">
                <SlidingProductCard title={"Product Dimension"}>
                  <p>
                    Case diamter:{" "}
                    <span className="font-semibold">
                      {product?.dimensions.case_diameter}
                    </span>{" "}
                    mm
                  </p>
                  <p>
                    Case thickness:{" "}
                    <span className="font-semibold">
                      {product?.dimensions.case_thickness}
                    </span>{" "}
                    mm
                  </p>
                  <p>
                    Strap width:{" "}
                    <span className="font-semibold">
                      {product?.dimensions.strap_width}
                    </span>{" "}
                    mm
                  </p>
                </SlidingProductCard>
                <SlidingProductCard title={"Product Weight"}>
                  <p>
                    Value:{" "}
                    <span className="font-semibold">
                      {product?.weight.value}
                    </span>{" "}
                    {product?.weight.unit}
                  </p>
                </SlidingProductCard>
                <SlidingProductCard title={"Shipping Details"}>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mt-4 mb-1">
                    Shipping dimensions
                  </h2>
                  <p>
                    Length:{" "}
                    <span className="font-semibold">
                      {product?.shipping_details.shipping_dimensions.length}
                    </span>{" "}
                    mm
                  </p>
                  <p>
                    Width:{" "}
                    <span className="font-semibold">
                      {product?.shipping_details.shipping_dimensions.width}
                    </span>{" "}
                    mm
                  </p>
                  <p>
                    Height:{" "}
                    <span className="font-semibold">
                      {product?.shipping_details.shipping_dimensions.height}
                    </span>{" "}
                    mm
                  </p>

                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mt-4 mb-1">
                    Shipping weight
                  </h2>
                  <p>
                    Value:{" "}
                    <span className="font-semibold">
                      {product?.shipping_details.shipping_weight.value}
                    </span>{" "}
                    {product?.shipping_details.shipping_weight.unit}
                  </p>
                </SlidingProductCard>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              About The Product
            </h2>
            <p className="text-3xl mt-4">{product?.description}</p>
          </div>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mt-10 mb-1">
            Manufacturer
          </h2>
          <img
            className="w-full max-h-[400px] object-cover"
            src={product?.manufacturer_image}
            alt="brand"
          />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDetail;
