import {
  adminNavItems,
  type AdminMenuId,
} from "../../../../configs/admin-nav.config";

type AdminSidebarProps = {
  activeMenu: AdminMenuId;
};

export default function AdminSidebar({
  activeMenu,
}: AdminSidebarProps) {
  return (
    <aside className="flex min-h-full w-80 flex-col items-center rounded-[20px] border border-white/20

        bg-white/10

        backdrop-blur-xl

        shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
      <div className="my-5 h-60 w-72 overflow-hidden rounded-[10px] border border-white/20

        bg-white/10

        backdrop-blur-xl

        shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
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
            <button
              type="button"
              key={item.id}
              className={`
                flex h-16 w-72 items-center justify-center
                rounded-[10px] border border-white/20

        bg-white/10

        backdrop-blur-xl

        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-b from-violet-600 from-[46%] to-purple-900 shadow-[inset_0px_4px_10px_rgba(0,0,0,0.5)] scale-95"
                    : "bg-fuchsia-300/20 hover:bg-fuchsia-300/30 hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] active:scale-95 active:translate-y-0 cursor-pointer"
                }
              `}
            >
              <span className="text-2xl font-extrabold text-violet-200 [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.25)]">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}