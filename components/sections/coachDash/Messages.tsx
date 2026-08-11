"use client";

import {
  Box,
  Divider,
  List,
  ListItem,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { MailOutlineRounded } from "@mui/icons-material";
import { coachDashboardData } from "@/public/fakeData/coachDashboard";

export const DashboardMessages = () => {
  const theme = useTheme();

  const messages = coachDashboardData.messages;

  return (
    <Paper
      sx={{
        borderRadius: theme.shape.rounded.medium,
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Box
        sx={{
          p: 2.5,
          pb: 1.5,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
          }}
        >
          Messages
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {messages.length === 0
            ? "No unread messages"
            : `${messages.length} unread messages`}
        </Typography>
      </Box>

      {messages.length === 0 ? (
        <Box
          sx={{
            minHeight: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2.5,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            No unread messages
          </Typography>
        </Box>
      ) : (
        <List
          disablePadding
          sx={{
            py: 1,
          }}
        >
          {messages.map((message, index) => (
            <Box key={message.id}>
              <ListItem
                sx={{
                  px: 2.5,
                  py: 1.25,
                  alignItems: "flex-start",
                  gap: 1.25,
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: theme.shape.rounded.circle,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "muted.main",
                    color: "primary.main",
                    flexShrink: 0,
                    mt: 0.25,
                  }}
                >
                  <MailOutlineRounded sx={{ fontSize: 16 }} />
                </Box>

                <Box
                  sx={{
                    minWidth: 0,
                    flex: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {message.sender}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        flexShrink: 0,
                      }}
                    >
                      {message.time}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mt: 0.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {message.content}
                  </Typography>
                </Box>
              </ListItem>

              {index !== messages.length - 1 && <Divider component="li" />}
            </Box>
          ))}
        </List>
      )}
    </Paper>
  );
};
