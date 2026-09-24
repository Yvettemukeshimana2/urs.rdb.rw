import { useState } from "react";
import Navbar from "./components/Navbar";
import VerifyPage from "./components/VerifyPage";
import LookupPage from "./components/LookupPage";

export default function App() {
  // "verify" = certificate result page, "lookup" = search form page
  const [page, setPage] = useState("verify");

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar onNavigate={setPage} />
      {page === "verify" ? (
        <VerifyPage onNavigate={setPage} />
      ) : (
        <LookupPage onNavigate={setPage} />
      )}
     <p className="mt-10 text-center text-sm tracking-widest text-[#8995a7]">
  © {new Date().getFullYear()} RWANDA DEVELOPMENT BOARD
</p>
    </div>
  );
}
