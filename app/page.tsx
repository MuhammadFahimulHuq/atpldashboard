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

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-center items-center h-screen">
      <Card>
  <CardHeader>
    <CardTitle className="font-bold">Login Now</CardTitle>
 
  </CardHeader>
  <CardContent>
    <div>
    <Input  type="email" placeholder="Email" />
  <Input  type="password" placeholder="Password" className="mt-5" />
  <Button type="submit" className="mt-5">Sign in</Button>
    </div>

  </CardContent>
  <CardFooter>
    <p className="text-sm">login as admin: user@exmaple.com | password: 123456 </p>
  </CardFooter>
</Card>
      </div>
    

    </main>
  );
}
