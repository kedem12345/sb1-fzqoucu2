export interface User {
  id: string;
  email: string;
  fullName: string;
  profilePicture?: string;
  bio?: string;
  rating: number;
  joinedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
}

export interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  profilePicture?: File;
}