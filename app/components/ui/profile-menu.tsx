import { useEffect, useRef, useState } from "react";
import { API_URL } from "~/config/api.url";

export const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function toggle() {
    setOpen((prev) => !prev);
  }

  async function handleLogout() {
    await fetch(`${API_URL}/api/v1/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/auth/login";
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={toggle}
        className="
          cursor-pointer size-10 overflow-hidden rounded-md
          transition-transform active:scale-95
        "
      >
        <img className="w-full rounded-md" src="/photo.png" alt="profile" />
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-2 w-40
            rounded-md border border-slate-200
            bg-white shadow-md
            animate-in fade-in zoom-in-95
          "
        >
          <button
            onClick={handleLogout}
            className="
              w-full cursor-pointer rounded-md px-3 py-2
              text-center text-sm
              hover:bg-slate-100
            "
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
