"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import User from "@/util/user";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    try {
      setLoading(true);
      const user = User.User.find((u) => u.email === email);
      if (!user) {
        setError("Invalid email");
        return;
      }
      bcrypt.compare(
        password,
        user.password,
        (err: Error | null, result: boolean) => {
          if (err || !result) {
            setError("Invalid password");
          } else {
            // Successful login
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", user.username);
            console.log("Logged in successfully!");
            router.push("/product");
          }
        }
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <div className="flex justify-center flex-col items-center h-screen px-2">
        <img src="/atpl_logo.png" className="w-[100px]" alt="logo" />

        <Card>
          <CardHeader>
            <CardTitle className="font-bold">Login Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                className="mt-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                disabled={loading}
                className="mt-5"
                onClick={handleLogin}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3 ..."
                      viewBox="0 0 24 24"
                    ></svg>
                    Processing...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>

              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-xs">
              admin: admin@example.com | password: 12345{" "}
            </p>
            <p className="text-xs">user: user@example.com | password: 12345 </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
