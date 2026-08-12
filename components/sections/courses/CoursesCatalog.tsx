"use client";

import { useMemo, useState } from "react";
import { Box } from "@mui/material";

import { ICourseSummary, IPublishStatus } from "@/interfaces";
import { coachCoursesData } from "@/public/fakeData/courses";
import { CoursesFilters } from "./CoursesFilters";
import { CoursesHeader } from "./CoursesHeader";
import { CoursesList } from "./CoursesList";
import { courseMatchesDateRange } from "./shared";

export const CoursesCatalog = () => {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [statusFilter, setStatusFilter] = useState<IPublishStatus | "ALL">("ALL");

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    const matchesSearch = (course: ICourseSummary) => {
      if (!query) {
        return true;
      }

      const fullName = `${course.trainee.firstName} ${course.trainee.lastName}`.toLowerCase();

      return (
        course.title.toLowerCase().includes(query) ||
        fullName.includes(query)
      );
    };

    return coachCoursesData.filter((course) => {
      const matchesStatus =
        statusFilter === "ALL" || course.publishStatus === statusFilter;

      return (
        matchesStatus &&
        matchesSearch(course) &&
        courseMatchesDateRange(course, fromDate, toDate)
      );
    });
  }, [fromDate, search, statusFilter, toDate]);

  return (
    <Box sx={{ width: "100%" }}>
      <CoursesHeader total={coachCoursesData.length} visible={filteredCourses.length} />

      <CoursesFilters
        search={search}
        fromDate={fromDate}
        toDate={toDate}
        statusFilter={statusFilter}
        onSearchChange={setSearch}
        onFromDateChange={setFromDate}
        onToDateChange={setToDate}
        onStatusFilterChange={setStatusFilter}
      />

      <CoursesList courses={filteredCourses} />
    </Box>
  );
};
