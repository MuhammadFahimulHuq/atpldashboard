'use client'
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import User from '@/util/user'
import { useState } from "react";
import bcrypt from 'bcryptjs';
import { useRouter } from "next/navigation";

export default function Home() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter()

  const handleLogin = () => {
    const user = User.User.find(u => u.email === email);
    if (!user) {
      setError('Invalid email');
      return;
    }
    bcrypt.compare(password, user.password, (err:Error | null, result:boolean) => {
      if (err || !result) {
        setError('Invalid password');
      } else {
        // Successful login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username',user.username);
        console.log('Logged in successfully!');
        router.push('/dashboard');
      }
    });
  };

  return (
    <main className="min-h-screen">
      <div className="flex justify-center items-center h-screen">
      <Card>
  <CardHeader>
    <CardTitle className="font-bold">Login Now</CardTitle>
 
  </CardHeader>
  <CardContent>
    <div>
    <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              <Input type="password" placeholder="Password" className="mt-5" value={password} onChange={e => setPassword(e.target.value)} />
              <Button type="button" className="mt-5" onClick={handleLogin}>Sign in</Button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>

  </CardContent>
  <CardFooter className="flex flex-col">
    <p className="text-sm">admin: admin@example.com | password: 12345 </p>
    <p className="text-sm">user: user@example.com | password: 12345 </p>
  </CardFooter>
</Card>
      </div>
    

    </main>
  );
}
