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

export interface DashboardMessage {
  id: string;
  sender: string;
  content: string;
  time: string;
}

export const DashboardMessages = () => {
  const theme = useTheme();

  const messages = [
    {
      id: "message-1",
      sender: "Ava Rahimi",
      content:
        "Coach, I finished yesterday's mobility work and uploaded my progress video.",
      time: "08:30",
    },
    {
      id: "message-2",
      sender: "Reza Mohammadi",
      content:
        "Can we move today's session to 5:30 PM? I have a meeting overlap.",
      time: "09:10",
    },
    {
      id: "message-3",
      sender: "Sara Azimi",
      content:
        "My knee feels better this week. Should I increase squat load in tomorrow's plan?",
      time: "10:02",
    },
  ];

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
