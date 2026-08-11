"use client";

import {
	AccessTimeRounded,
	EmailRounded,
	FitnessCenterRounded,
	HealthAndSafetyRounded,
	HomeRounded,
	LocalPhoneRounded,
	MonitorHeartRounded,
	SaveRounded,
	StraightenRounded,
} from "@mui/icons-material";

import {
	Autocomplete,
	Avatar,
	Box,
	Card,
	CardContent,
	Chip,
	Divider,
	Fab,
	Stack,
	TextField,
	Typography,
	useColorScheme,
	useTheme,
} from "@mui/material";

import { bloodTypeOptions } from "@/public/consts/bloodTypes";
import { coachDashboardData } from "@/public/fakeData/coachDashboard";

const formatDate = (value: Date | string) =>
	new Date(value).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

const formatDateInputValue = (value: Date | string) => {
	const parsedDate = new Date(value);

	if (Number.isNaN(parsedDate.getTime())) {
		return "";
	}

	return parsedDate.toISOString().split("T")[0];
};

const ProfilePage = () => {
	const theme = useTheme();
	const { mode } = useColorScheme();
	const currentUser = coachDashboardData;

	const infoFields = [
		{
			label: "First name",
			value: currentUser.firstName,
		},
		{
			label: "Last name",
			value: currentUser.lastName,
		},
		{
			label: "Email address",
			value: currentUser.email,
		},
		{
			label: "Phone number",
			value: currentUser.phoneNumber,
		},
		{
			label: "Birth date",
			value: formatDateInputValue(currentUser.birthDate),
			kind: "date",
		},
		{
			label: "Location",
			value: currentUser.location,
		},
		{
			label: "Address",
			value: currentUser.address,
			fullWidth: true,
		},
		{
			label: "About",
			value: currentUser.about,
			fullWidth: true,
			multiline: true,
			minRows: 4,
		},
	];

	const medicalFields = [
		{
			label: "Height",
			value: `${currentUser.medicalInfo.height}`,
			helper: "cm",
			icon: <StraightenRounded fontSize="small" />,
		},
		{
			label: "Weight",
			value: `${currentUser.medicalInfo.weight}`,
			helper: "kg",
			icon: <FitnessCenterRounded fontSize="small" />,
		},
		{
			label: "Chest",
			value: `${currentUser.medicalInfo.size.chest}`,
			helper: "cm",
			icon: <MonitorHeartRounded fontSize="small" />,
		},
		{
			label: "Waist",
			value: `${currentUser.medicalInfo.size.waist}`,
			helper: "cm",
			icon: <StraightenRounded fontSize="small" />,
		},
		{
			label: "Hip",
			value: `${currentUser.medicalInfo.size.hip}`,
			helper: "cm",
			icon: <StraightenRounded fontSize="small" />,
		},
		{
			label: "Blood type",
			value: currentUser.medicalInfo.bloodType,
			icon: <HealthAndSafetyRounded fontSize="small" />,
			kind: "bloodType",
		},
		{
			label: "Allergies",
			value: currentUser.medicalInfo.allergies,
			fullWidth: true,
			multiline: true,
			minRows: 2,
		},
		{
			label: "Previous injuries",
			value: currentUser.medicalInfo.injuries,
			fullWidth: true,
			multiline: true,
			minRows: 2,
		},
		{
			label: "Medical notes",
			value: currentUser.medicalInfo.notes,
			fullWidth: true,
			multiline: true,
			minRows: 3,
		},
	];

	const quickFacts = [
		{
			icon: <EmailRounded fontSize="small" />,
			label: "Primary contact",
			value: currentUser.email,
		},
		{
			icon: <LocalPhoneRounded fontSize="small" />,
			label: "Mobile",
			value: currentUser.phoneNumber,
		},
		{
			icon: <HomeRounded fontSize="small" />,
			label: "Based in",
			value: currentUser.location,
		},
		{
			icon: <AccessTimeRounded fontSize="small" />,
			label: "Last updated",
			value: formatDate(currentUser.updatedAt),
		},
	];

	return (
		<Box sx={{ width: "100%" }}>
			<Card
				sx={{
					overflow: "hidden",
					borderRadius: theme.shape.rounded.medium,
					background: theme.gradients[mode === "dark" ? "dark" : "light"].profileHero,
				}}
			>
				<CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
					<Box
						sx={{
							display: "flex",
							gap: 3,
							flexWrap: "wrap",
						}}
					>
						<Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
							<Avatar
								src={currentUser.avatarUrl}
								alt={`${currentUser.firstName} ${currentUser.lastName}`}
								sx={{
									width: 88,
									height: 88,
									border: "3px solid",
									borderColor: "background.paper",
									boxShadow: theme.shadows[4],
								}}
							/>

							<Box>
								<Stack
									direction="row"
									spacing={1}
									useFlexGap
									sx={{ flexWrap: "wrap" }}
								>
									<Chip
										label={currentUser.role}
										sx={{
											backgroundColor: "green.main",
											color: "green.sub",
											fontWeight: 700,
										}}
									/>

									<Chip
										label={currentUser.title}
										variant="outlined"
										sx={{
											borderColor: "divider",
											backgroundColor: "background.paper",
										}}
									/>
								</Stack>

								<Typography
									variant="h4"
									sx={{
										mt: 1.5,
										fontWeight: 700,
										letterSpacing: "-0.03em",
									}}
								>
									{`${currentUser.firstName} ${currentUser.lastName}`}
								</Typography>

								<Typography
									variant="body1"
									color="text.secondary"
									sx={{ mt: 1, maxWidth: 680 }}
								>
									{currentUser.about}
								</Typography>
							</Box>
						</Stack>
					</Box>

					<Box
						sx={{
							mt: 3,
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								sm: "repeat(2, minmax(0, 1fr))",
								lg: "repeat(4, minmax(0, 1fr))",
							},
							gap: 1.5,
						}}
					>
						{quickFacts.map((fact) => (
							<Box
								key={fact.label}
								sx={{
									p: 1.5,
									borderRadius: theme.shape.rounded.light,
									border: "1px solid",
									borderColor: "divider",
									backgroundColor: "background.paper",
								}}
							>
								<Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
									<Box
										sx={{
											width: 36,
											height: 36,
											borderRadius: theme.shape.rounded.light,
											display: "grid",
											placeItems: "center",
											backgroundColor: "primary.light",
											color: "primary.dark",
											flexShrink: 0,
										}}
									>
										{fact.icon}
									</Box>

									<Box sx={{ minWidth: 0 }}>
										<Typography variant="caption" color="text.secondary">
											{fact.label}
										</Typography>

										<Typography
											variant="body2"
											sx={{ fontWeight: 600, wordBreak: "break-word" }}
										>
											{fact.value}
										</Typography>
									</Box>
								</Stack>
							</Box>
						))}
					</Box>
				</CardContent>
			</Card>

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
				<Card sx={{ borderRadius: theme.shape.rounded.medium }}>
					<CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
						<Typography variant="h5" sx={{ fontWeight: 700 }}>
							General Information
						</Typography>

						<Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
							Editable form shell for profile data. No save logic is wired yet.
						</Typography>

						<Box
							sx={{
								mt: 3,
								display: "grid",
								gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
								gap: 2,
							}}
						>
							{infoFields.map((field) => (
								<TextField
									key={field.label}
									label={field.label}
									defaultValue={field.value}
									fullWidth
									multiline={field.multiline}
									minRows={field.minRows}
									slotProps={{
										inputLabel: {
											shrink: true,
										},
									}}
									sx={{
										gridColumn: field.fullWidth ? { xs: "span 1", md: "span 2" } : undefined,
										"& .MuiOutlinedInput-root": {
											alignItems: field.multiline ? "flex-start" : "center",
											backgroundColor: "background.default",
										},
									}}
								/>
							))}
						</Box>
					</CardContent>
				</Card>

				<Stack spacing={3}>
					<Card sx={{ borderRadius: theme.shape.rounded.medium }}>
						<CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
							<Typography variant="h5" sx={{ fontWeight: 700 }}>
								Medical Information
							</Typography>

							<Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
								Kept separate from general details to make health-related data easier to scan.
							</Typography>

							<Box
								sx={{
									mt: 3,
									display: "grid",
									gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
									gap: 2,
								}}
							>
								{medicalFields.map((field) => {
									const fieldSx = {
										gridColumn: field.fullWidth ? { xs: "span 1", md: "span 2" } : undefined,
										"& .MuiOutlinedInput-root": {
											alignItems: field.multiline ? "flex-start" : "center",
											backgroundColor: "background.default",
										},
									};

									if (field.kind === "bloodType") {
										return (
											<Autocomplete
												key={field.label}
												options={bloodTypeOptions as readonly string[]}
												defaultValue={field.value}
												disableClearable
												sx={fieldSx}
												renderInput={(params) => (
													<TextField
														{...params}
														label={field.label}
														slotProps={{
															inputLabel: {
																...params.slotProps.inputLabel,
																shrink: true,
															},
															input: {
																...params.slotProps.input,
																startAdornment: field.icon ? (
																	<>
																		<Box
																			sx={{
																				mr: 1,
																				color: "text.secondary",
																				display: "flex",
																				alignItems: "center",
																			}}
																		>
																			{field.icon}
																		</Box>
																		{params.slotProps.input.startAdornment}
																	</>
																) : (
																	params.slotProps.input.startAdornment
																),
															},
															htmlInput: params.slotProps.htmlInput,
														}}
													/>
												)}
											/>
										);
									}

									return (
										<TextField
											key={field.label}
											label={field.label}
											defaultValue={field.value}
											fullWidth
											multiline={field.multiline}
											minRows={field.minRows}
											slotProps={{
												inputLabel: {
													shrink: true,
												},
												input: {
													startAdornment: field.icon ? (
														<Box
															sx={{
																mr: 1,
																color: "text.secondary",
																display: "flex",
																alignItems: "center",
															}}
														>
															{field.icon}
														</Box>
													) : undefined,
													endAdornment: field.helper ? (
														<Typography
															variant="caption"
															color="text.secondary"
															sx={{ ml: 1, whiteSpace: "nowrap" }}
														>
															{field.helper}
														</Typography>
													) : undefined,
												},
											}}
											sx={fieldSx}
										/>
									);
								})}
							</Box>
						</CardContent>
					</Card>

					<Card sx={{ borderRadius: theme.shape.rounded.medium }}>
						<CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
							<Typography variant="h6" sx={{ fontWeight: 700 }}>
								Expertise Snapshot
							</Typography>

							<Divider sx={{ my: 2 }} />

							<Typography variant="body2" color="text.secondary">
								Specialties
							</Typography>

							<Stack
								direction="row"
								spacing={1}
								useFlexGap
								sx={{ mt: 1.25, flexWrap: "wrap" }}
							>
								{currentUser.specialties.map((item) => (
									<Chip
										key={item}
										label={item}
										sx={{
											borderRadius: theme.shape.rounded.square,
											backgroundColor: "blue.main",
											color: "blue.sub",
											fontWeight: 600,
										}}
									/>
								))}
							</Stack>

							<Typography variant="body2" color="text.secondary" sx={{ mt: 2.5 }}>
								Certifications
							</Typography>

							<Stack spacing={1.25} sx={{ mt: 1.25 }}>
								{currentUser.certifications.map((item) => (
									<Box
										key={item}
										sx={{
											p: 1.5,
											borderRadius: theme.shape.rounded.light,
											backgroundColor: "background.default",
											border: "1px solid",
											borderColor: "divider",
										}}
									>
										<Typography variant="body2" sx={{ fontWeight: 600 }}>
											{item}
										</Typography>
									</Box>
								))}
							</Stack>
						</CardContent>
					</Card>
				</Stack>
			</Box>

			<Box
				sx={{
					position: { xs: "fixed", md: "sticky" },
					bottom: {
						xs: "calc(env(safe-area-inset-bottom, 0px) + 92px)",
						sm: "calc(env(safe-area-inset-bottom, 0px) + 104px)",
						md: 24,
					},
					right: {
						xs: 16,
						sm: 20,
						md: "auto",
					},
					display: "flex",
					justifyContent: "flex-end",
					mt: 3,
					zIndex: theme.zIndex.appBar,
					pointerEvents: "none",
				}}
			>
				<Fab
					color="primary"
					aria-label="save profile"
					sx={{
						pointerEvents: "auto",
						boxShadow: theme.shadows[6],
					}}
				>
					<SaveRounded />
				</Fab>
			</Box>
		</Box>
	);
};

export default ProfilePage;
