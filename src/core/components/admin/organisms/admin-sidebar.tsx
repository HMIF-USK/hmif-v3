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
            <div
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