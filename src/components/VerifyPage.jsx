 import { CheckCircle2, Home } from "lucide-react";

const CERTIFICATE = {
  dateOfIssuance: "2021-08-26",
  serialNumber: "691861",
  businessName: "YVETTE MUKESHIMANA",
  companyCode: "119313947",
  approvedBy: "Richard Kayibanda",
  approvedTitle: "Registrar General",
};

function RDBLogo() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-[72px] items-center">
        {/* RDB Logo Bars */}
        <div className="flex h-[72px] w-[48px] overflow-hidden">
          <div className="w-1/3 bg-[#0069A6]" />
          <div className="w-1/3 bg-[#F5C400]" />
          <div className="w-1/3 bg-[#2E9B50]" />
        </div>

        {/* RDB Text */}
        <div className="ml-2 leading-none">
          <div className="flex items-end">
            <span className="text-[38px] font-bold tracking-tight text-[#0069A6]">
              RDB
            </span>

            <div className="ml-2 border-l border-slate-400 pl-2">
              <div className="text-[16px] font-medium leading-[18px] text-[#0069A6]">
                RWANDA
              </div>
              <div className="text-[16px] font-medium leading-[18px] text-[#0069A6]">
                DEVELOPMENT BOARD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, multiline = false }) {
  return (
    <div className="flex items-start justify-between gap-6 py-5">
      <span className="text-[18px] font-normal text-[#4F5868]">
        {label}:
      </span>

      <span
        className={`text-right text-[18px] font-medium text-[#293241] ${
          multiline ? "leading-7" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default function VerifyPage({ onNavigate }) {
  return (
    <main className="min-h-screen bg-[#D1D2D2] px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-[760px] items-center justify-center">
        <div
          className="
            w-full
            rounded-[28px]
            bg-[#F7F7F7]
            px-7
            py-10
            shadow-[0_8px_25px_rgba(0,0,0,0.08)]
            sm:px-12
            sm:py-12
          "
        >
          {/* RDB Logo */}
          <div className="mb-12">
            <RDBLogo />
          </div>

          {/* Valid Certificate */}
          <div className="mb-10 flex items-center justify-center gap-3">
            <h1
              className="
                text-center
                text-[28px]
                font-normal
                tracking-tight
                text-[#48A85A]
                sm:text-[32px]
              "
            >
              Certificate is Valid
            </h1>

            <CheckCircle2
              size={48}
              strokeWidth={2.5}
              className="shrink-0 text-[#48A85A]"
            />
          </div>

          {/* Divider */}
          <div className="mb-1 h-px w-full bg-[#D0D0D0]" />

          {/* Certificate Information */}
          <div>
            <Row
              label="Date Of Issuance"
              value={CERTIFICATE.dateOfIssuance}
            />

            <Row
              label="Serial Number"
              value={CERTIFICATE.serialNumber}
            />

            <Row
              label="Business Name"
              value={CERTIFICATE.businessName}
            />

            <Row
              label="Company Code"
              value={CERTIFICATE.companyCode}
            />

            <Row
              label="Approved By"
              multiline
              value={
                <>
                  <span className="block">
                    {CERTIFICATE.approvedBy}
                  </span>

                  <span className="block">
                    {CERTIFICATE.approvedTitle}
                  </span>
                </>
              }
            />
          </div>

          {/* Bottom Divider */}
          <div className="mt-1 h-px w-full bg-[#D0D0D0]" />

          {/* Back Button */}
          <button
            type="button"
            onClick={() => onNavigate("lookup")}
            className="
              mt-10
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-[17px]
              bg-[#0068A8]
              py-5
              text-[21px]
              font-normal
              text-white
              transition
              hover:bg-[#00598F]
              active:scale-[0.99]
            "
          >
            <Home size={30} strokeWidth={2} />
            <span>Back to Services</span>
          </button>
        </div>
      </div>
    </main>
  );
}