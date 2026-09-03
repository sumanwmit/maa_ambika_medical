import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, Eye, EyeOff, Mail, Phone, ShieldCheck, 
  ArrowRight, HeartPulse, CheckCircle2, AlertCircle, Sparkles 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/config';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotInput, setForgotInput] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!identifier.trim()) {
      setErrorMessage('Please enter your registered Email or Mobile Number.');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('Please enter your password.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    // Simulate authenticating against pharmacist / customer portal
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage('Authentication successful! Welcome to Maa Ambika Portal.');
      if (rememberMe) {
        localStorage.setItem('maa_ambika_user_session', identifier.trim());
      }
    }, 1200);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotInput.trim()) {
      setForgotSuccess(true);
      setTimeout(() => {
        setForgotSuccess(false);
        setShowForgotModal(false);
        setForgotInput('');
      }, 2500);
    }
  };

  return (
    <div id="login-page-container" className="min-h-screen bg-[#050505] flex flex-col justify-center py-14 sm:px-6 lg:px-8 text-[#F5F5F5]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
        {/* Business Logo & Branding */}
        <Link to="/" className="inline-flex items-center gap-3 group mb-5">
          <div className="h-10 w-10 bg-[#111111] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center font-serif font-bold text-sm tracking-widest">
            MA
          </div>
          <div className="text-left">
            <span className="text-lg font-serif font-normal tracking-tight block text-white">
              Maa Ambika <span className="text-[#C5A059]">Medical Hall</span>
            </span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">
              Customer & Staff Portal
            </span>
          </div>
        </Link>

        <h2 className="text-2xl font-serif font-normal tracking-tight text-white">
          Sign In to Your Account
        </h2>
        <p className="mt-1 text-xs text-white/50 font-light">
          Access your digital prescription history, refill orders, and pharmacy records.
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-[#0B0B0B] p-6 sm:p-8 border border-white/10 shadow-2xl">
          {/* Error Message */}
          {errorMessage && (
            <div className="mb-4 flex items-center gap-2 bg-[#1c1212] p-3 text-xs text-red-300 border border-red-800/60 animate-in fade-in">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 flex items-center gap-2 bg-[#111111] border border-[#C5A059]/40 p-3 text-xs text-[#C5A059] animate-in fade-in">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C5A059]" />
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-sm" noValidate>
            {/* Email / Mobile Number field */}
            <div>
              <label 
                htmlFor="login-identifier" 
                className="block text-[11px] uppercase tracking-wider font-semibold text-white/70 mb-1"
              >
                Email or Mobile Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#C5A059]">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <input
                  type="text"
                  id="login-identifier"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="name@example.com or 10-digit mobile"
                  required
                  autoComplete="username"
                  className="w-full bg-[#111111] border border-white/15 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C5A059] transition"
                />
              </div>
            </div>

            {/* Password field with Show/Hide password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label 
                  htmlFor="login-password" 
                  className="block text-[11px] uppercase tracking-wider font-semibold text-white/70"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-[11px] uppercase tracking-wider text-[#C5A059] hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#C5A059]">
                  <Lock className="h-3.5 w-3.5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full bg-[#111111] border border-white/15 pl-10 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C5A059] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/40 hover:text-white cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5 text-white/40" />}
                </button>
              </div>
            </div>

            {/* Remember Me option */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  id="login-remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 accent-[#C5A059] bg-[#111111] border-white/20"
                />
                <span className="text-[11px] text-white/60 select-none">
                  Remember me on this device
                </span>
              </label>

              <span className="text-[10px] text-white/40 flex items-center gap-1 uppercase tracking-wider">
                <ShieldCheck className="h-3 w-3 text-[#C5A059]" />
                <span>256-Bit SSL</span>
              </span>
            </div>

            {/* Secure Login button with Loading state */}
            <div className="pt-2">
              <button
                type="submit"
                id="btn-submit-login"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b5924a] text-black font-bold uppercase tracking-widest py-3 text-xs shadow-lg active:scale-[0.98] transition ${
                  loading ? 'opacity-75 cursor-wait' : 'cursor-pointer'
                }`}
              >
                {loading ? (
                  <>
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-black border-t-transparent animate-spin"></div>
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <Lock className="h-3.5 w-3.5" />
                    <span>Secure Sign In</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick Notice */}
          <div className="mt-6 pt-5 border-t border-white/10 text-center text-xs text-white/50">
            Need immediate medicine without signing in?{' '}
            <Link to="/" className="text-[#C5A059] font-medium hover:underline">
              Order on WhatsApp
            </Link>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs text-white/40 hover:text-[#C5A059] transition inline-flex items-center gap-1 uppercase tracking-wider text-[11px]"
          >
            <span>← Return to Maa Ambika Homepage</span>
          </Link>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xs p-4 animate-in fade-in"
          onClick={() => setShowForgotModal(false)}
        >
          <div
            className="w-full max-w-sm bg-[#0B0B0B] p-6 shadow-2xl border border-white/15 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-serif font-normal mb-1">Reset Portal Password</h3>
            <p className="text-xs text-white/50 mb-4 font-light">
              Enter your registered mobile number or email. We will dispatch a verification code or reset link.
            </p>

            {forgotSuccess ? (
              <div className="bg-[#111111] border border-[#C5A059]/40 p-4 text-center text-xs text-[#C5A059]">
                <CheckCircle2 className="h-6 w-6 text-[#C5A059] mx-auto mb-1" />
                <span>Verification code sent to your registered phone!</span>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={forgotInput}
                  onChange={(e) => setForgotInput(e.target.value)}
                  placeholder="e.g. 9876543210 or email"
                  className="w-full bg-[#111111] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                />
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="submit"
                    className="flex-1 bg-[#C5A059] hover:bg-[#b5924a] text-black font-bold uppercase tracking-wider py-2.5 text-xs transition cursor-pointer"
                  >
                    Send Reset Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="bg-[#111111] border border-white/20 text-white/80 hover:text-white px-4 py-2.5 text-xs transition cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
