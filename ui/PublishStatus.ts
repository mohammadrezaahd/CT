import { IPublishStatus } from "@/interfaces";

export const getPublishStatusConfig = (status: IPublishStatus) => {
  switch (status) {
    case IPublishStatus.DRAFT:
      return {
        bgColor: "grey.200",
        textColor: "text.secondary",
      };

    case IPublishStatus.UPCOMING:
      return {
        bgColor: "yellow.main",
        textColor: "yellow.sub",
      };

    case IPublishStatus.ACTIVE:
      return {
        bgColor: "green.main",
        textColor: "green.sub",
      };

    case IPublishStatus.COMPLETED:
      return {
        bgColor: "blue.main",
        textColor: "blue.sub",
      };

    case IPublishStatus.CANCELLED:
      return {
        bgColor: "red.main",
        textColor: "red.sub",
      };

    default:
      return {
        bgColor: "grey.200",
        textColor: "text.secondary",
      };
  }
};

export const getPublishStatusLabel = (status: IPublishStatus) => status;
