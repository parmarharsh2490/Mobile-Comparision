import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { MobileContext } from './store';

export default function PhoneDetailsTable() {
  const { filteredPhones, deletePhone, handleWishList } = useContext(MobileContext);

  return (
    <TableContainer className='text-5xl' component={Paper}>
      <Table aria-label="phone details table" sx={{ minWidth: 320 }}>
        <TableHead>
          <TableRow>
            <TableCell>Model</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>
                <div>
                  {phone.model}
                  <div>
                    <button onClick={() => handleWishList(phone)} className="text-blue-500">
                      <FaHeart />
                    </button>
                    <button onClick={() => deletePhone(phone.model)} className="text-red-500">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Display Type</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.display_type}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Display Size</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.display_size}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>RAM</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.ram}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Storage</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.storage}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Price</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.price}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Processor</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.processor}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Battery</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.battery}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Charger</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.charger}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Charging Speed</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.charging_speed}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Camera</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.camera}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Fingerprint</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.fingerprint}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Antutu Score</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.antutu_score}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Network Type</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.network_type}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Customer Ratings</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.customer_ratings}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Operating System</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.operating_system}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Colors</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.colors?.join(', ')}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Weight</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.weight}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Date First Available</TableCell>
            {filteredPhones.map((phone, index) => (
              <TableCell key={index}>{phone.date_first_available}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
