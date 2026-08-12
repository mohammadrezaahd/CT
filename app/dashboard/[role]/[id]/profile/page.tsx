"use client";

import {
	ProfileExpertiseSnapshot,
	ProfileGeneralInfo,
	ProfileHero,
	ProfileMedicalInfo,
	ProfileSaveAction,
} from "@/components/sections";
import { Box, Stack } from "@mui/material";

const ProfilePage = () => {
	return (
		<Box sx={{ width: "100%" }}>
			<ProfileHero />

			<Box
				sx={{
					mt: 4,
					display: "grid",
					gridTemplateColumns: {
						xs: "1fr",
						xl: "minmax(0, 1.5fr) minmax(320px, 0.9fr)",
					},
					gap: 3,
					alignItems: "start",
				}}
			>
				<ProfileGeneralInfo />

				<Stack spacing={3}>
					<ProfileMedicalInfo />
					<ProfileExpertiseSnapshot />
				</Stack>
			</Box>

			<ProfileSaveAction />
		</Box>
	);
};

export default ProfilePage;
