"use client";

import { useParams } from "next/navigation";

import { ProgramDetailsPageSection } from "@/components/sections";

const ProgramDetailsPage = () => {
  const params = useParams<{ courseId?: string | string[]; programId?: string | string[] }>();

  const courseIdParam = params?.courseId;
  const programIdParam = params?.programId;

  const courseId = Array.isArray(courseIdParam) ? courseIdParam[0] : courseIdParam ?? "";
  const programId = Array.isArray(programIdParam) ? programIdParam[0] : programIdParam ?? "";

  return <ProgramDetailsPageSection courseId={courseId} programId={programId} />;
};

export default ProgramDetailsPage;
