import React, { Suspense } from "react";
import { Metadata } from "next";
import CustomersTable from "@/app/ui/customers/table";

export const metadata: Metadata = {
  title: "Customers",
};

const Customers = () => {
  return (
    <Suspense fallback={null}>
      <CustomersTable />
    </Suspense>
  );
};

export default Customers;
