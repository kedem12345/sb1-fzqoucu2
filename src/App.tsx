import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { AuthLayout } from './components/layout/AuthLayout';
import { Dashboard } from './pages/Dashboard';

function App() {
  // Mock authentication state
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={
                <AuthLayout title="Sign in to TradeHub">
                  <LoginForm />
                </AuthLayout>
              }
            />
            <Route
              path="/register"
              element={
                <AuthLayout title="Create your account">
                  <RegisterForm />
                </AuthLayout>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}