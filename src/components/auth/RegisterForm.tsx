import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../../store/authStore';
import { UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const register = useAuthStore((state) => state.register);
  const isLoading = useAuthStore((state) => state.isLoading);

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await register({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
      });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-primary-800">
            Full Name
          </label>
          <input
            {...registerField('fullName')}
            type="text"
            className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-white"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-800">
            Email
          </label>
          <input
            {...registerField('email')}
            type="email"
            className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-white"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-primary-800">
            Password
          </label>
          <input
            {...registerField('password')}
            type="password"
            className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-white"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary-800">
            Confirm Password
          </label>
          <input
            {...registerField('confirmPassword')}
            type="password"
            className="mt-1 block w-full rounded-md border-neutral-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 bg-white"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full justify-center items-center gap-2 rounded-md bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 transition-colors duration-200"
        >
          {isLoading ? (
            'Creating account...'
          ) : (
            <>
              <UserPlus size={16} />
              Create Account
            </>
          )}
        </button>
      </form>

      <div className="mt-6 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-neutral-500">Already have an account?</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link 
          to="/login" 
          className="text-sm font-semibold text-primary-600 hover:text-primary-500 transition-colors duration-200"
        >
          Sign in
        </Link>
      </div>
    </>
  );
}