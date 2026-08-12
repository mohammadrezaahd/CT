"use client";

import { useParams } from "next/navigation";

import { CourseDetailsPageSection } from "@/components/sections";

const CourseDetailsPage = () => {
  const params = useParams<{ courseId?: string | string[] }>();

  const courseIdParam = params?.courseId;
  const courseId = Array.isArray(courseIdParam) ? courseIdParam[0] : courseIdParam ?? "";

  return <CourseDetailsPageSection courseId={courseId} />;
};

export default CourseDetailsPage;
