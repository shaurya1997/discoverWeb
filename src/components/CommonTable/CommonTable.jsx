import styled from "@emotion/styled";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
const NoDataTyproGraphy = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  marginTop: "0.5rem",
  fontSize: "0.8rem",
});
const CommonTable = ({
  columns,
  row,
  count,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
  color,
}) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                sx={{ color: "rgb(191 179 179)", fontSize: "0.75rem" }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    color: { color },
                    fontSize: "0.75rem",
                  }}
                >
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!row.length && (
        <NoDataTyproGraphy>No Matching Records found</NoDataTyproGraphy>
      )}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        sx={{ color: "white" }}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </>
  );
};
export default CommonTable;
