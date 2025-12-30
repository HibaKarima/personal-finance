"use client"
import Link from "next/link"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import Image from "next/image"
import { useState } from "react"



export default function Page() {
    const [currState, setCurrState] = useState('Sign Up')
    const [showPassword, setShowPassword] = useState(false)

  return (
    <section>
      <header className=" shadow-xl w-full h-auto rounded-b-2xl p-5  bg-black text-center lg:hidden sm:block">
<h1 className="text-4xl font-extrabold tracking-tight text-white ">personal finance</h1>
      </header>
    <div className="bg-[#f8f4f0] h-screen flex p-5 w-full flex-1 items-center gap-7">
      <div className="relative w-1/3 h-full hidden lg:block">
  <Image
    src="/images/illustration-authentication.svg"
    alt="Background image"
    fill
    className="object-cover rounded-2xl z-0"
  />

  <h1 className="absolute top-8 left-8 text-2xl font-extrabold tracking-tight text-white">
    Finance
  </h1>

  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
    <h1 className="text-lg font-semibold mb-4 mx-auto">
      Keep track of your money and save for your future
    </h1>
    <p className="text-sm mx-auto">
      Personal finance app puts you in control of your spending. Track
      transactions, set budgets, and add to savings pots easily.
    </p>
  </div>
</div>

    <Card className=" lg:w-1/3 sm:w-3/4 h-auto m-auto bg-white">
      <CardHeader>
        <CardTitle>{currState}</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          
          <div className="flex flex-col gap-6">
            <div className={`gap-2 ${currState === 'Sign Up' ? 'grid' : 'hidden'}`}>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2 relative">
  <Label htmlFor="password">Password</Label>
  <Input
    id="password"
    type={showPassword ? "text" : "password"}
    required
    className="pr-10"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-9 text-gray-500 hover:text-secondary-green cursor-pointer"
  >
    <Image src={`${showPassword ?"/images/icon-hide-password.svg":"/images/icon-show-password.svg"}`} alt="show passowrd" width={18} height={20}/>
  </button>
  <p className={`absolute right-1 -bottom-6 ${currState === 'Sign Up' ? 'grid' : 'hidden'}`}>password leaset 8 characters</p>
</div>

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      
        <Button type="submit" className="w-full bg-gray-900 text-white mt-5 cursor-pointer">
           <Link href="/dashboard"> {currState === 'Sign Up' ? 'Craete Account' : 'Login'}</Link>
        </Button>
      <div>
          {currState === 'Sign Up' ? (
              <div onClick={() => setCurrState('Login')}>
                Already have an account? <Button variant="link" className="cursor-pointer">Login</Button>
              </div>
            ) : (
              
               <div onClick={() => setCurrState('Sign Up')}>
                Don`t have an account? <Button variant="link" className="cursor-pointer">Sign Up</Button>
              </div>
            )}
        </div>
      </CardFooter>
    </Card>
    </div>
    </section>
  )
}
