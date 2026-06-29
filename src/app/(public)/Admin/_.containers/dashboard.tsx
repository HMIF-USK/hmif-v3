"use client";

import React from "react";
import AdminSidebar from "@/core/components/admin-sidebar"; 
import { DocumentationForm } from "@/components/sections/public/admin/dashboard";
import HeroBanner from "@/components/svg/admin/HeroBanner"; 

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0d0a1b] relative overflow-hidden"> 
      {/* 1. HERO BANNER SEBAGAI BACKGROUND */}
      {/* scale-75 untuk mengecilkan ke 75%, -top-16 untuk menaikkan posisinya */}
      <div className="absolute inset-x-0 -top-20 z-0 pointer-events-none flex justify-center transform scale-95 origin-top">
        <HeroBanner />
      </div>

      {/* 2. SIDEBAR */}
      <AdminSidebar activeMenu="dashboard" />

      {/* 3. CONTENT AREA (Diberi z-10 agar berada di depan Hero Banner) */}
      <main className="flex-1 p-8 flex flex-col gap-8 items-start overflow-y-auto relative z-10">
        
        {/* Konten Form Panel Upload */}
        <DocumentationForm />
        
      </main>
    </div>
  );
}