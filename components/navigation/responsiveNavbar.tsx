import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import NavigationContent from './content'

const ResponsiveNavbar = () => {
  return (
    <div className='block md:hidden'>
    <Sheet >
      <SheetTrigger><Menu /></SheetTrigger>
      <SheetContent side={'left'}>
      <NavigationContent />
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default ResponsiveNavbar