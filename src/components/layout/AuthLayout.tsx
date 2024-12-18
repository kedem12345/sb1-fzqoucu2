import React from 'react';
import { CircleUserRound } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-luxury-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay"></div>
      <div className="relative flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <div className="rounded-full bg-gold-gradient p-3 shadow-gold-lg">
              <CircleUserRound className="h-16 w-16 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-center font-display text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-2 text-center text-sm text-gold-300">
            Experience Luxury Trading
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white/95 backdrop-blur-sm px-8 py-10 shadow-luxury-lg sm:rounded-xl border border-gold-200/20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}