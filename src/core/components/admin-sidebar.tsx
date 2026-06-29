import {
  adminNavItems,
  type AdminMenuId,
} from "../../configs/admin-nav.config";

type AdminSidebarProps = {
  activeMenu: AdminMenuId;
};

export default function AdminSidebar({
  activeMenu,
}: AdminSidebarProps) {
  return (
    <aside className="ml-8 mt-8 flex h-[837.36px] w-80 flex-col items-center rounded-[20px] border border-slate-400 bg-zinc-500/20 shadow-[0_10px_13.6px_rgba(0,0,0,0.25)] backdrop-blur-[6.5px]">
      <div className="my-5 h-60 w-72 overflow-hidden rounded-[10px] border border-slate-400 bg-zinc-500/20 shadow-[0_10px_13.6px_rgba(0,0,0,0.25)] backdrop-blur-[6.5px]">
        <img
          //src="/images/hinata_mantap.jpg"
          //alt="Admin profile"
          className="h-full w-full object-cover"
        />
      </div>

      <nav className="flex flex-col items-center gap-5">
        {adminNavItems.map((item) => {
          const isActive = activeMenu === item.id;

          return (
            <div
              key={item.id}
              className={`
                flex h-16 w-72 items-center justify-center
                rounded-[10px] border border-slate-400
                shadow-[0_13px_13.6px_rgba(0,0,0,0.25),inset_0_4px_4px_rgba(0,0,0,0.25)]
                backdrop-blur-[6.5px]
                transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-b from-violet-600 from-[46%] to-purple-900"
                    : "bg-fuchsia-300/20"
                }
              `}
            >
              <span className="text-2xl font-extrabold text-violet-200 [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.25)]">
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}