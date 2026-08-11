import { CourseLevel } from "@/interfaces";

export const getLevelColor = (level: CourseLevel) => {
  switch (level) {
    case CourseLevel.EZ:
      return "green.sub";

    case CourseLevel.MED:
      return "yellow.sub";

    case CourseLevel.HARD:
      return "red.sub";

    default:
      return "grey.500";
  }
};
