import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const UserListPage = () => {
  return (

    <div className='h-screen w-full bg-slate-100 rounded-l-3xl mt-4'>

    <div className='p-4'>
        <div className='border-b-2 border-gray-200 pb-5'>
        <h1 className='text-2xl text-gray-600 font-bold mb-1'>Users List</h1>
    <Table>
  
    <TableHeader>
      <TableRow>
        <TableHead >Name</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="text-right">Created at</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  </div>
  </div>
  </div>
  )
}

export default UserListPage