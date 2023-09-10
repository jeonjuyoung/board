import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  no: number,
  look: number,
  date: number,
  title: string,
  user: string,
  pas: number
) {
  return { no, look, date, title, user, pas };
}

const rows = [
  createData(1, 159, 2023.01, "글제목", "홍길동", 1234),
  createData(2, 237, 2023.01, "글제목", "홍길동", 1234),
  createData(3, 262, 2023.01, "글제목", "홍길동", 1234),
  createData(4, 305, 2023.01, "글제목", "홍길동", 1234),
  createData(5, 356, 2023.01, "글제목", "홍길동", 1234),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className="board-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">글번호</TableCell>
            <TableCell align="center">조회수</TableCell>
            <TableCell align="center">날짜</TableCell>
            <TableCell align="center">제목</TableCell>
            <TableCell align="center">작성자</TableCell>
            <TableCell align="center">비밀번호</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              //key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.no}</TableCell>
              <TableCell align="center">{row.look}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell scope="row" align="center">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.user}</TableCell>
              <TableCell align="center">{row.pas}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
