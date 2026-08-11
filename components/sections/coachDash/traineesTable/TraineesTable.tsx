
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { ITraineesResultTable } from "@/interfaces";

import { TraineeTableRow } from "./TraineesTableRow";

interface TraineesTableProps {
  trainees: ITraineesResultTable[];
}

export const TraineesTable = ({
  trainees,
}: TraineesTableProps) => {
  const sortedTrainees = [...trainees].sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() -
      new Date(a.updatedAt).getTime(),
  );

  return (
    <TableContainer
      sx={{
        maxHeight: 450,
        width: "100%",
      }}
    >
      <Table
        stickyHeader
        sx={{
          width: "100%",
          tableLayout: "fixed",

          minWidth: {
            xs: 500,
            sm: 600,
          },
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "grey.50",
            }}
          >
            <TableCell
              sx={{
                fontWeight: 600,
                color: "text.secondary",

                width: {
                  xs: "34%",
                  sm: "30%",
                },

                minWidth: {
                  xs: 120,
                  sm: 150,
                },
              }}
            >
              TRAINEE
            </TableCell>

            <TableCell
              align="center"
              sx={{
                fontWeight: 600,
                color: "text.secondary",

                width: {
                  xs: "12%",
                  sm: "10%",
                },

                minWidth: {
                  xs: 70,
                  sm: 80,
                },
              }}
            >
              COURSE #
            </TableCell>

            <TableCell
              sx={{
                fontWeight: 600,
                color: "text.secondary",

                width: {
                  xs: "22%",
                  sm: "20%",
                },

                minWidth: {
                  xs: 100,
                  sm: 120,
                },
              }}
            >
              STATUS
            </TableCell>

            <TableCell
              align="center"
              sx={{
                fontWeight: 600,
                color: "text.secondary",

                width: {
                  xs: "12%",
                  sm: "10%",
                },

                minWidth: {
                  xs: 60,
                  sm: 70,
                },
              }}
            >
              COURSE NAME
            </TableCell>

            <TableCell
              align="center"
              sx={{
                fontWeight: 600,
                color: "text.secondary",

                width: {
                  xs: "20%",
                  sm: "20%",
                },

                minWidth: {
                  xs: 120,
                  sm: 130,
                },
              }}
            >
              LEVEL
            </TableCell>

            <TableCell
              align="center"
              sx={{
                fontWeight: 600,
                color: "text.secondary",

                width: {
                  xs: "16%",
                  sm: "10%",
                },

                minWidth: {
                  xs: 70,
                  sm: 80,
                },
              }}
            >
              ACTION
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedTrainees.map((trainee, index) => (
            <TraineeTableRow
              key={`${trainee.name}-${index}`}
              trainee={trainee}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

