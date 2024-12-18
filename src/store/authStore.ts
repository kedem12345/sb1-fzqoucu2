import { create } from 'zustand';
import { AuthState } from '../types/auth';

// This is a mock implementation. In a real app, these would interact with your backend
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // Mock login - replace with actual API call
      const mockUser = {
        id: '1',
        email,
        fullName: 'John Doe',
        rating: 4.5,
        joinedAt: new Date(),
      };
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  register: async (data) => {
    set({ isLoading: true });
    try {
      // Mock registration - replace with actual API call
      const mockUser = {
        id: '1',
        email: data.email,
        fullName: data.fullName,
        rating: 0,
        joinedAt: new Date(),
      };
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));