import React, { useState } from 'react';
import { Page } from '../types';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#1f2937] p-4 font-sans">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-slate-300 tracking-tight text-[28px] font-bold leading-tight">Inventory Agent</h2>
          <h1 className="text-slate-300 text-[22px] font-bold leading-tight tracking-tight pt-5">Welcome Back</h1>
        </div>

        <div className="bg-[#374151] p-8 rounded-xl shadow-2xl border border-slate-600/30">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="flex flex-col">
                <p className="text-slate-300 text-base font-medium leading-normal pb-2">Username</p>
                <input 
                  required
                  className="flex w-full rounded-lg text-slate-200 bg-[#1f2937] border border-transparent focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 text-base transition-all duration-200 placeholder-slate-500 outline-none" 
                  placeholder="Enter your username" 
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                <p className="text-slate-300 text-base font-medium leading-normal pb-2">Password</p>
                <div className="relative flex w-full items-stretch">
                  <input 
                    required
                    type={showPassword ? "text" : "password"}
                    className="flex w-full rounded-lg text-slate-200 bg-[#1f2937] border border-transparent focus:border-primary focus:ring-1 focus:ring-primary h-14 px-4 pr-12 text-base transition-all duration-200 placeholder-slate-500 outline-none" 
                    placeholder="Enter your password" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-200"
                  >
                    <span className="material-symbols-outlined">
                        {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </label>
            </div>
            <div>
              <button 
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-primary text-[#1f2937] text-base font-bold hover:bg-primary-dark transition-colors duration-200 shadow-lg shadow-primary/20"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <a href="#" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors duration-200">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
