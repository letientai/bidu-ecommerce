import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./contentStyle.scss";
export const TableOrder = (prop) => {
  const listOrder = localStorage.getItem("listOrder");
  const data = JSON.parse(listOrder);

  const showInfOrder = (item) => {
    prop.sendItemDetailOrder(item);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>ĐƠN HÀNG</caption>
          <TableHead>
            <TableRow>
              <TableCell>Mã đơn hàng</TableCell>
              <TableCell align="left">Tên người mua</TableCell>
              <TableCell align="left">Số điện thoại</TableCell>
              <TableCell align="left">Địa chỉ</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.phone}</TableCell>
                <TableCell align="left">
                  {item.address + " " + item.province}
                </TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="left" className="action">
                  <div className="icon-action">
                    <HighlightOffIcon />
                  </div>
                  <div
                    className="icon-action"
                    onClick={(e) => showInfOrder(item)}
                  >
                    <RemoveRedEyeIcon />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
