 import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Menu } from "lucide-react";

export default function LookupPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Login data:", data);

      // Your App.jsx uses state-based navigation.
      // "verify" displays the VerifyPage.
      onNavigate("verify");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9]">
      {/* Header */}
       

      {/* Main */}
      <main className="mx-auto flex min-h-[calc(100vh-180px)] max-w-4xl flex-col items-center justify-center px-5 py-12">
        {/* Heading */}
        <div className="w-full text-center">
          <h1 className="text-4xl font-medium tracking-tight text-[#101b2d] sm:text-5xl">
            LOGIN
          </h1>

          <p className="mt-6 text-lg text-[#52627a] sm:text-xl">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Login Card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-10 w-full max-w-3xl rounded-[28px] border border-[#d9dee5] bg-white px-7 py-9 shadow-sm sm:px-14 sm:py-12"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-4 block text-lg font-medium text-[#111827]"
            >
              Email <span className="text-red-500">*</span>
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`h-16 w-full rounded-xl border bg-white px-5 text-base text-[#1f2937] outline-none transition placeholder:text-[#9aa3af] focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                  : "border-[#d6dce3] focus:border-[#08679f] focus:ring-[#08679f]/20"
              }`}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mt-8">
            <label
              htmlFor="password"
              className="mb-4 block text-lg font-medium text-[#111827]"
            >
              Password <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                })}
                className={`h-16 w-full rounded-xl border bg-white px-5 pr-16 text-base text-[#1f2937] outline-none transition placeholder:text-[#9aa3af] focus:ring-2 ${
                  errors.password
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-[#d6dce3] focus:border-[#08679f] focus:ring-[#08679f]/20"
                }`}
              />

              {/* Show / Hide Password */}
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                className="absolute right-0 top-0 flex h-16 w-16 items-center justify-center text-[#08679f] transition hover:bg-gray-50"
              >
                {showPassword ? (
                  <EyeOff size={26} strokeWidth={2} />
                ) : (
                  <Eye size={26} strokeWidth={2} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              className="text-lg font-medium text-[#075d91] hover:underline"
              onClick={() => {
                console.log("Forgot Password clicked");
              }}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 h-16 w-full rounded-xl bg-[#075d91] text-lg font-medium text-white transition hover:bg-[#064e7a] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>

          {/* Register */}
          <p className="mt-8 text-center text-lg text-[#667085]">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-medium text-[#075d91] hover:underline"
              onClick={() => {
                console.log("Register clicked");
              }}
            >
              Register
            </button>
          </p>
        </form>
      </main>
    </div>
  );
}