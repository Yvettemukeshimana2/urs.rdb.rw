 import { useState } from "react";
import {
  Home,
  HelpCircle,
  List,
  BookOpen,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "FAQs", icon: HelpCircle, href: "#faqs" },
  {
    label: "ISIC 6 business activities",
    icon: List,
    href: "#isic",
  },
  {
    label: "View user manual",
    icon: BookOpen,
    href: "#manual",
  },
];

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleHomeClick = () => {
    setOpen(false);
    onNavigate?.("verify");
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Main Header */}
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* RDB Logo */}
        <button
          type="button"
          onClick={handleHomeClick}
          className="flex items-center gap-3"
        >
          {/* RDB Colored Bars */}
          <div className="flex h-12 w-12 overflow-hidden">
            <div className="w-3 bg-[#0875b9]" />
            <div className="w-3 bg-[#f4c400]" />
            <div className="w-3 bg-[#42a947]" />
          </div>

          {/* RDB Text */}
          <div className="flex items-center">
            <span className="text-4xl font-bold tracking-tight text-[#08679f]">
              RDB
            </span>

            <div className="ml-3 border-l border-gray-300 pl-3 leading-tight">
              <p className="text-sm font-medium text-[#08679f]">
                RWANDA
              </p>

              <p className="text-sm font-medium text-[#08679f]">
                DEVELOPMENT BOARD
              </p>
            </div>
          </div>
        </button>

        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 text-[#17405f] transition hover:bg-gray-100"
        >
          {open ? (
            <X size={28} strokeWidth={2} />
          ) : (
            <Menu size={28} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <nav className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <ul className="divide-y divide-gray-200">
              {NAV_LINKS.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 py-5 text-[#17405f] transition hover:text-[#08679f]"
                  >
                    <Icon
                      size={22}
                      strokeWidth={2}
                      className="text-[#08679f]"
                    />

                    <span className="text-lg font-medium">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}