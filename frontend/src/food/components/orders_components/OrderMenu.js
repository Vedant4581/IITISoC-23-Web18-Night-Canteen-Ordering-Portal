import React from "react";
import Logo from '../../../Images/Logo.png'

export default function OrderMenu({cartItem}) {
  return (
    <tr>
      <td width="20%">
        <img
          src={Logo}
          width="40"
        />
      </td>

      <td width="60%">
        <p>{cartItem.name}</p>
        <div className="product-qty">
          <p className="d-block">Quantity:{cartItem.amount}</p>
        </div>
      </td>
      <td width="20%">
        <div className="text-right">
          <p>{cartItem.amount*cartItem.price}</p>
        </div>
      </td>
    </tr>
  );
}
