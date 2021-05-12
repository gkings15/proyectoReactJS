import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#dcdde1",
  },
});

function createData(year, gp, min, pts, fg) {
  return { year, gp, min, pts, fg };
}

const rows = [
  createData("2020-21", 12, 7.5, 7.0, 58.2),
  createData("2019-20", 39, 32.8, 13.9, 65.2),
  createData("2018-19", 61, 30.2, 33.6, 64.8),
  createData("2017-18", 65, 23.9, 23.9, 64.3),
  createData("2016-17", 74, 27.5, 30.2, 59.2),
];

export default function DenseTable({ abbreviation }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>By Year</TableCell>
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">GP</TableCell>
            <TableCell align="right">Min</TableCell>
            <TableCell align="right">Pts;</TableCell>
            <TableCell align="right">Fg%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.year}>
              <TableCell component="th" scope="row">
                {row.year}
              </TableCell>
              <TableCell align="right">{abbreviation}</TableCell>
              <TableCell align="right">{row.gp}</TableCell>
              <TableCell align="right">{row.min}</TableCell>
              <TableCell align="right">{row.pts}</TableCell>
              <TableCell align="right">{row.fg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
