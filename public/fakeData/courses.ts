import {
  CourseStatus,
  ICourseDetails,
  ICourseSummary,
  IProgramSummary,
  ICourseMilestone,
  IPublishStatus,
} from "@/interfaces";

export const coachCoursesData: ICourseSummary[] = [
  {
    id: "course-summary-1",
    title: "Strength Foundations",
    status: CourseStatus.PROG,
    elapsed: 34,
    remaining: 22,
    completion: 61,
    publishStatus: IPublishStatus.ACTIVE,
    trainee: {
      id: "trainee-summary-1",
      firstName: "Alex",
      lastName: "Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    startDate: "2026-07-01",
    endDate: "2026-09-25",
    programsCount: 4,
    milestonesCount: 7,
  },
  {
    id: "course-summary-2",
    title: "Mobility Reset",
    status: CourseStatus.PEND,
    elapsed: 6,
    remaining: 36,
    completion: 14,
    publishStatus: IPublishStatus.UPCOMING,
    trainee: {
      id: "trainee-summary-2",
      firstName: "Sarah",
      lastName: "Williams",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    startDate: "2026-08-20",
    endDate: "2026-10-03",
    programsCount: 3,
    milestonesCount: 5,
  },
  {
    id: "course-summary-3",
    title: "Endurance Builder",
    status: CourseStatus.FAILD,
    elapsed: 39,
    remaining: 21,
    completion: 65,
    publishStatus: IPublishStatus.ACTIVE,
    trainee: {
      id: "trainee-summary-3",
      firstName: "Michael",
      lastName: "Brown",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    startDate: "2026-06-12",
    endDate: "2026-08-30",
    programsCount: 5,
    milestonesCount: 8,
  },
  {
    id: "course-summary-4",
    title: "Core Stability",
    status: CourseStatus.PROG,
    elapsed: 20,
    remaining: 15,
    completion: 57,
    publishStatus: IPublishStatus.ACTIVE,
    trainee: {
      id: "trainee-summary-4",
      firstName: "Emily",
      lastName: "Davis",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    startDate: "2026-07-15",
    endDate: "2026-09-05",
    programsCount: 3,
    milestonesCount: 6,
  },
  {
    id: "course-summary-5",
    title: "Weight Management",
    status: CourseStatus.PROG,
    elapsed: 22,
    remaining: 28,
    completion: 44,
    publishStatus: IPublishStatus.DRAFT,
    trainee: {
      id: "trainee-summary-5",
      firstName: "Daniel",
      lastName: "Wilson",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    startDate: "2026-08-05",
    endDate: "2026-10-18",
    programsCount: 4,
    milestonesCount: 7,
  },
  {
    id: "course-summary-6",
    title: "Injury Recovery",
    status: CourseStatus.COMP,
    elapsed: 45,
    remaining: 0,
    completion: 100,
    publishStatus: IPublishStatus.COMPLETED,
    trainee: {
      id: "trainee-summary-6",
      firstName: "Olivia",
      lastName: "Martinez",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    startDate: "2026-05-01",
    endDate: "2026-07-18",
    programsCount: 6,
    milestonesCount: 10,
  },
  {
    id: "course-summary-7",
    title: "Hypertrophy Essentials",
    status: CourseStatus.PROG,
    elapsed: 10,
    remaining: 42,
    completion: 19,
    publishStatus: IPublishStatus.ACTIVE,
    trainee: {
      id: "trainee-summary-7",
      firstName: "Nima",
      lastName: "Hosseini",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    startDate: "2026-08-01",
    endDate: "2026-10-30",
    programsCount: 5,
    milestonesCount: 9,
  },
  {
    id: "course-summary-8",
    title: "Functional Fat Loss",
    status: CourseStatus.PEND,
    elapsed: 0,
    remaining: 56,
    completion: 0,
    publishStatus: IPublishStatus.CANCELLED,
    trainee: {
      id: "trainee-summary-8",
      firstName: "Leila",
      lastName: "Karimi",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    startDate: "2026-09-10",
    endDate: "2026-11-20",
    programsCount: 3,
    milestonesCount: 4,
  },
];

const buildProgramSummaries = (course: ICourseSummary): IProgramSummary[] => {
  const statusCycle: IPublishStatus[] = [
    IPublishStatus.ACTIVE,
    IPublishStatus.DRAFT,
    IPublishStatus.UPCOMING,
    IPublishStatus.COMPLETED,
  ];

  return Array.from({ length: course.programsCount }, (_, index) => {
    const status =
      course.publishStatus === IPublishStatus.CANCELLED
        ? IPublishStatus.CANCELLED
        : course.publishStatus === IPublishStatus.DRAFT
          ? IPublishStatus.DRAFT
          : course.publishStatus === IPublishStatus.UPCOMING
            ? IPublishStatus.UPCOMING
            : statusCycle[index % statusCycle.length];

    return {
      id: `${course.id}-program-${index + 1}`,
      courseId: course.id,
      title: `Program ${index + 1}`,
      status,
      order: index + 1,
      sectionsCount: 2 + (index % 3),
      exercisesCount: 8 + index * 2,
    };
  });
};

const buildMilestones = (course: ICourseSummary): ICourseMilestone[] => {
  const start = new Date(course.startDate).getTime();
  const end = new Date(course.endDate).getTime();
  const safeRange = Math.max(end - start, 1);

  return Array.from({ length: course.milestonesCount }, (_, index) => {
    const ratio = (index + 1) / (course.milestonesCount + 1);
    const dueDate = new Date(start + safeRange * ratio).toISOString();

    return {
      id: `${course.id}-milestone-${index + 1}`,
      title: `Milestone ${index + 1}`,
      courseId: course.id,
      dueDate,
      order: index + 1,
    };
  });
};

export const coachCourseDetailsData: ICourseDetails[] = coachCoursesData.map((course) => ({
  ...course,
  description: `${course.title} is tailored for ${course.trainee.firstName} ${course.trainee.lastName} with a focus on measurable weekly progress and recovery discipline.`,
  programs: buildProgramSummaries(course),
  milestones: buildMilestones(course),
  createdAt: new Date(new Date(course.startDate).getTime() - 1000 * 60 * 60 * 24 * 14).toISOString(),
  updatedAt: new Date().toISOString(),
}));

export const getCoachCourseDetailsById = (courseId: string) =>
  coachCourseDetailsData.find((course) => course.id === courseId) ?? null;
