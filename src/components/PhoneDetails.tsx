import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
const PhoneDetails = () => {
  return (
    <Card className='flex justify-start items-center flex-col w-3/12'>
    <CardHeader>
      <CardTitle>Mobile Phone</CardTitle>
    </CardHeader>
    <CardContent className='text-xl cardContent'>
      <p>Display Type</p>
      <p>Display Size</p>
      <p>RAM / STORAGE</p>
      <p>Price</p>
      <p>Processor</p>
      <p>Battery</p>
      <p>Charger</p>
      <p>Charging Speed</p>
      <p>Camera</p>
      <p>FingerPrint</p>
      <p>Antutu Score</p>
      <p>Network Type</p>
      <p>Customer Ratings</p>
      <p>Operating System</p>
      <p>Colors</p>
      <p>Mobile Weight</p>
      <p>Date First Available</p>
      {/* <p>In The Box</p> */}
    </CardContent>
  </Card>
  )
}

export default PhoneDetails
