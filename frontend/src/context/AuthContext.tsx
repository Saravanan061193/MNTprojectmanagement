"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { setCookie, deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

interface User {
    id: string;
    name: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    login: (token: string, userData: User) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const token = getCookie("token");
            if (token) {
                // Optionally verify token with backend here
                // For now, we assume if token exists, we might have user data in localStorage 
                // or we'd fetch /api/auth/me
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            }
            setIsLoading(false);
        };
        checkAuth();
    }, []);

    const login = (token: string, userData: User) => {
        setCookie("token", token, { maxAge: 60 * 60 * 24 }); // 1 day
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        router.push("/dashboard");
    };

    const logout = () => {
        deleteCookie("token");
        localStorage.removeItem("user");
        setUser(null);
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
