import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../../store/authStore';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-gold-400 focus:ring-gold-400 bg-white font-sans"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-neutral-800">
            Password
          </label>
          <input
            {...register('password')}
            type="password"
            className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-gold-400 focus:ring-gold-400 bg-white font-sans"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              {...register('rememberMe')}
              type="checkbox"
              className="h-4 w-4 rounded border-neutral-300 text-gold-400 focus:ring-gold-400"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-800">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-gold-400 hover:text-gold-500 transition-colors">
              Forgot your password?
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          variant="gold"
          className="w-full"
          isLoading={isLoading}
        >
          {!isLoading && <LogIn size={16} className="mr-2" />}
          Sign in
        </Button>
      </form>

      <div className="mt-8 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-neutral-500 font-display">Not a member?</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link 
          to="/register" 
          className="text-sm font-semibold text-gold-400 hover:text-gold-500 transition-colors"
        >
          Create an account
        </Link>
      </div>
    </>
  );
}