import {
  CheckCircleRounded,
  PlayArrowRounded,
  PendingRounded,
  BlockRounded,
} from "@mui/icons-material";

import { TraineesTableStatus } from "@/interfaces";

export const getStatusConfig = (status: TraineesTableStatus) => {
  switch (status) {
    case TraineesTableStatus.COMP:
      return {
        icon: CheckCircleRounded,
        bgColor: "green.main",
        textColor: "green.sub",
      };

    case TraineesTableStatus.PROG:
      return {
        icon: PlayArrowRounded,
        bgColor: "blue.main",
        textColor: "blue.sub",
      };

    case TraineesTableStatus.PEND:
      return {
        icon: PendingRounded,
        bgColor: "yellow.main",
        textColor: "yellow.sub",
      };

    case TraineesTableStatus.FAILD:
      return {
        icon: BlockRounded,
        bgColor: "red.main",
        textColor: "red.sub",
      };

    default:
      return {
        icon: PendingRounded,
        bgColor: "grey.200",
        textColor: "grey.500",
      };
  }
};

export const getStatusLabel = (status: TraineesTableStatus) => {
  switch (status) {
    case TraineesTableStatus.COMP:
      return "Completed";

    case TraineesTableStatus.PROG:
      return "In Progress";

    case TraineesTableStatus.PEND:
      return "Not Started";

    case TraineesTableStatus.FAILD:
      return "Skipped";

    default:
      return status;
  }
};
