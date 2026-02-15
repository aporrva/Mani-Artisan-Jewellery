import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { toast } from "sonner";

interface AuthPageProps {
  onBack: () => void;
}

type AuthMode = "login" | "signup";

export function AuthPage({ onBack }: AuthPageProps) {
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup form state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Validation states
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!loginEmail) {
      newErrors.loginEmail = "Email is required";
    } else if (!validateEmail(loginEmail)) {
      newErrors.loginEmail = "Please enter a valid email";
    }

    if (!loginPassword) {
      newErrors.loginPassword = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate successful login
      toast.success("Welcome back! You've been logged in.", {
        icon: "✨",
      });
      setTimeout(() => {
        onBack();
      }, 1000);
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!signupName) {
      newErrors.signupName = "Name is required";
    }

    if (!signupEmail) {
      newErrors.signupEmail = "Email is required";
    } else if (!validateEmail(signupEmail)) {
      newErrors.signupEmail = "Please enter a valid email";
    }

    if (!signupPassword) {
      newErrors.signupPassword = "Password is required";
    } else if (!validatePassword(signupPassword)) {
      newErrors.signupPassword = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (signupPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate successful signup
      toast.success("Account created successfully! Welcome to Mani Artisan.", {
        icon: "🎉",
      });
      setTimeout(() => {
        onBack();
      }, 1000);
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast.success(`Connecting with ${provider}...`, {
      icon: "🔐",
    });
  };

  const handleGuestContinue = () => {
    toast.success("Continuing as guest", {
      icon: "👤",
    });
    setTimeout(() => {
      onBack();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f5] via-[#f7e7dc]/30 to-[#faf8f5] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Branding */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#d4a574] to-[#c4956a] mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h1 className="font-serif text-5xl text-[#2c2420] mb-4 leading-tight">
                  Welcome to
                  <br />
                  Mani Artisan
                </h1>
                <p className="text-[#6b5d54] text-lg leading-relaxed">
                  Discover handcrafted jewelry made with love. Create an account
                  to save your favorites, track orders, and enjoy a personalized
                  shopping experience.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f7e7dc] flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-[#2c2420] mb-1">
                      Save Your Favorites
                    </h3>
                    <p className="text-sm text-[#6b5d54]">
                      Create wishlists and never lose track of pieces you love
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f7e7dc] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-[#2c2420] mb-1">
                      Exclusive Offers
                    </h3>
                    <p className="text-sm text-[#6b5d54]">
                      Get early access to new collections and special discounts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <Card className="bg-white/95 backdrop-blur-sm border border-[#d4a574]/20 shadow-2xl p-8 md:p-10 rounded-3xl">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#d4a574] to-[#c4956a] mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-serif text-3xl text-[#2c2420]">
                Mani Artisan
              </h2>
            </div>

            {/* Tab Toggle */}
            <div className="flex gap-2 mb-8 bg-[#f7e7dc]/30 p-1.5 rounded-2xl">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setErrors({});
                }}
                className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 ${
                  authMode === "login"
                    ? "bg-white shadow-md text-[#2c2420]"
                    : "text-[#6b5d54] hover:text-[#2c2420]"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setAuthMode("signup");
                  setErrors({});
                }}
                className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 ${
                  authMode === "signup"
                    ? "bg-white shadow-md text-[#2c2420]"
                    : "text-[#6b5d54] hover:text-[#2c2420]"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Login Form */}
            {authMode === "login" && (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label
                    htmlFor="login-email"
                    className="text-[#2c2420] mb-2 block"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b5d54]" />
                    <Input
                      id="login-email"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => {
                        setLoginEmail(e.target.value);
                        setErrors({ ...errors, loginEmail: "" });
                      }}
                      placeholder="you@example.com"
                      className={`pl-12 h-12 border-[#d4a574]/30 focus:border-[#d4a574] rounded-xl ${
                        errors.loginEmail ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.loginEmail && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.loginEmail}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="login-password"
                    className="text-[#2c2420] mb-2 block"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b5d54]" />
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      value={loginPassword}
                      onChange={(e) => {
                        setLoginPassword(e.target.value);
                        setErrors({ ...errors, loginPassword: "" });
                      }}
                      placeholder="Enter your password"
                      className={`pl-12 pr-12 h-12 border-[#d4a574]/30 focus:border-[#d4a574] rounded-xl ${
                        errors.loginPassword ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b5d54] hover:text-[#2c2420] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.loginPassword && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.loginPassword}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-[#d4a574]/30 text-[#d4a574] focus:ring-[#d4a574]"
                    />
                    <span className="text-sm text-[#6b5d54]">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-[#d4a574] hover:text-[#c4956a] transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#d4a574] hover:bg-[#c4956a] text-white py-6 text-lg rounded-xl"
                >
                  Login
                </Button>
              </form>
            )}

            {/* Sign Up Form */}
            {authMode === "signup" && (
              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <Label
                    htmlFor="signup-name"
                    className="text-[#2c2420] mb-2 block"
                  >
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b5d54]" />
                    <Input
                      id="signup-name"
                      type="text"
                      value={signupName}
                      onChange={(e) => {
                        setSignupName(e.target.value);
                        setErrors({ ...errors, signupName: "" });
                      }}
                      placeholder="Your name"
                      className={`pl-12 h-12 border-[#d4a574]/30 focus:border-[#d4a574] rounded-xl ${
                        errors.signupName ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.signupName && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.signupName}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="signup-email"
                    className="text-[#2c2420] mb-2 block"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b5d54]" />
                    <Input
                      id="signup-email"
                      type="email"
                      value={signupEmail}
                      onChange={(e) => {
                        setSignupEmail(e.target.value);
                        setErrors({ ...errors, signupEmail: "" });
                      }}
                      placeholder="you@example.com"
                      className={`pl-12 h-12 border-[#d4a574]/30 focus:border-[#d4a574] rounded-xl ${
                        errors.signupEmail ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.signupEmail && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.signupEmail}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="signup-password"
                    className="text-[#2c2420] mb-2 block"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b5d54]" />
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      value={signupPassword}
                      onChange={(e) => {
                        setSignupPassword(e.target.value);
                        setErrors({ ...errors, signupPassword: "" });
                      }}
                      placeholder="At least 8 characters"
                      className={`pl-12 pr-12 h-12 border-[#d4a574]/30 focus:border-[#d4a574] rounded-xl ${
                        errors.signupPassword ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b5d54] hover:text-[#2c2420] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.signupPassword && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.signupPassword}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="confirm-password"
                    className="text-[#2c2420] mb-2 block"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b5d54]" />
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setErrors({ ...errors, confirmPassword: "" });
                      }}
                      placeholder="Re-enter your password"
                      className={`pl-12 pr-12 h-12 border-[#d4a574]/30 focus:border-[#d4a574] rounded-xl ${
                        errors.confirmPassword ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b5d54] hover:text-[#2c2420] transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#d4a574] hover:bg-[#c4956a] text-white py-6 text-lg rounded-xl"
                >
                  Create Account
                </Button>

                <p className="text-xs text-center text-[#6b5d54]">
                  By creating an account, you agree to our{" "}
                  <button className="text-[#d4a574] hover:underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className="text-[#d4a574] hover:underline">
                    Privacy Policy
                  </button>
                </p>
              </form>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-[#d4a574]/20" />
              <span className="text-sm text-[#6b5d54]">or continue with</span>
              <div className="flex-1 h-px bg-[#d4a574]/20" />
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => handleSocialLogin("Google")}
                className="w-full border-2 border-[#d4a574]/20 hover:border-[#d4a574] hover:bg-[#f7e7dc]/50 py-6 rounded-xl"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => handleSocialLogin("Apple")}
                className="w-full border-2 border-[#d4a574]/20 hover:border-[#d4a574] hover:bg-[#f7e7dc]/50 py-6 rounded-xl"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Continue with Apple
              </Button>
            </div>

            {/* Guest Continue */}
            <div className="mt-6 text-center">
              <button
                onClick={handleGuestContinue}
                className="text-sm text-[#6b5d54] hover:text-[#d4a574] transition-colors"
              >
                Continue as Guest
              </button>
            </div>

            {/* Back to Shop */}
            <div className="mt-6 text-center">
              <button
                onClick={onBack}
                className="text-sm text-[#6b5d54] hover:text-[#2c2420] transition-colors"
              >
                ← Back to Shop
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
