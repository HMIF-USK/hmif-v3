"use client";

import AdminSidebar from "@/core/components/admin-sidebar";
import BackgroundAdmin from "@/components/svg/admin/HeroBanner";
import EventForm from "@/components/sections/public/admin/Event";

export default function EventContainer() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090214]">
      {/* Background */}
      <div className="absolute inset-0">
        <BackgroundAdmin />
      </div>

      {/* Foreground */}
      <div className="relative z-10 flex items-start gap-6 px-8 py-8">
        {/* Sidebar */}
        <AdminSidebar activeMenu="events" />

        {/* Form */}
        <div className="w-[940px]">
          <EventForm />
        </div>
      </div>
    </div>
  );
}