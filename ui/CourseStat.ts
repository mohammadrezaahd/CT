import {
  CheckCircleRounded,
  PlayArrowRounded,
  PendingRounded,
  BlockRounded,
} from "@mui/icons-material";

import { CourseStatus } from "@/interfaces";

export const getStatusConfig = (status: CourseStatus) => {
  switch (status) {
    case CourseStatus.COMP:
      return {
        icon: CheckCircleRounded,
        bgColor: "green.main",
        textColor: "green.sub",
      };

    case CourseStatus.PROG:
      return {
        icon: PlayArrowRounded,
        bgColor: "blue.main",
        textColor: "blue.sub",
      };

    case CourseStatus.PEND:
      return {
        icon: PendingRounded,
        bgColor: "yellow.main",
        textColor: "yellow.sub",
      };

    case CourseStatus.FAILD:
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

export const getStatusLabel = (status: CourseStatus) => {
  switch (status) {
    case CourseStatus.COMP:
      return "Completed";

    case CourseStatus.PROG:
      return "In Progress";

    case CourseStatus.PEND:
      return "Not Started";

    case CourseStatus.FAILD:
      return "Failed";

    default:
      return status;
  }
};
