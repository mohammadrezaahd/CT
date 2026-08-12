"use client";

import { SearchRounded } from "@mui/icons-material";
import {
  Box,
  Chip,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import { IPublishStatus } from "@/interfaces";
import { publishStatusFilterOptions } from "./shared";

interface CoursesFiltersProps {
  search: string;
  fromDate: string;
  toDate: string;
  statusFilter: IPublishStatus | "ALL";
  onSearchChange: (value: string) => void;
  onFromDateChange: (value: string) => void;
  onToDateChange: (value: string) => void;
  onStatusFilterChange: (value: IPublishStatus | "ALL") => void;
}

export const CoursesFilters = ({
  search,
  fromDate,
  toDate,
  statusFilter,
  onSearchChange,
  onFromDateChange,
  onToDateChange,
  onStatusFilterChange,
}: CoursesFiltersProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 3,
        p: { xs: 2, md: 2.5 },
        borderRadius: theme.shape.rounded.medium,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Stack spacing={2}>
        <TextField
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by course title or trainee name"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded fontSize="small" color="action" />
                </InputAdornment>
              ),
            },
          }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          <TextField
            label="From date"
            type="date"
            value={fromDate}
            onChange={(event) => onFromDateChange(event.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <TextField
            label="To date"
            type="date"
            value={toDate}
            onChange={(event) => onToDateChange(event.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Publish status
          </Typography>

          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
            {publishStatusFilterOptions.map((option) => {
              const selected = option === statusFilter;

              return (
                <Chip
                  key={option}
                  label={option === "ALL" ? "All" : option}
                  variant={selected ? "filled" : "outlined"}
                  onClick={() => onStatusFilterChange(option)}
                  sx={{
                    borderRadius: theme.shape.rounded.square,
                    fontWeight: 600,
                    backgroundColor: selected ? "primary.light" : undefined,
                    color: selected ? "primary.dark" : undefined,
                    borderColor: selected ? "primary.light" : "divider",
                  }}
                />
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
