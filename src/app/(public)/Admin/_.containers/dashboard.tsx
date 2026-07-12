"use client";

import React from "react";
import AdminSidebar from "@/core/components/admin-sidebar"; 
import { DocumentationForm } from "@/components/sections/public/admin/dashboard";
import HeroBanner from "@/components/svg/admin/HeroBanner"; 

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0d0a1b] relative overflow-hidden"> 
      <div className="absolute inset-x-0 -top-20 z-0 pointer-events-none flex justify-center transform scale-95 origin-top">
        <HeroBanner />
      </div>

      <AdminSidebar activeMenu="dashboard" />

      <main className="flex-1 p-8 flex flex-col gap-8 items-start overflow-y-auto relative z-10">
        
        <DocumentationForm />
        
      </main>
    </div>
  );
}