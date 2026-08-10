import { TraineesTableLevel } from "@/interfaces";

export const getLevelColor = (level: TraineesTableLevel) => {
  switch (level) {
    case TraineesTableLevel.EZ:
      return "green.sub";

    case TraineesTableLevel.MED:
      return "yellow.sub";

    case TraineesTableLevel.HARD:
      return "red.sub";

    default:
      return "grey.500";
  }
};
