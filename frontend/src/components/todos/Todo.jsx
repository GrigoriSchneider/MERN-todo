import React from "react";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Stack from "@mui/material/Stack";

import moment from "moment";

const Todo = ({ todo }) => {
  return (
    <>
      <Box
        sx={{
          m: 2,
          border: 1,
          borderRadius: 1,
          borderColor: "darkgrey",
          p: 2,
          backgroundColor: "#fafafa",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={2}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <div>
              {todo.isComplete ? (
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, textDecoration: "line-through" }}
                >
                  {todo.name}
                </Typography>
              ) : (
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  {todo.name}
                </Typography>
              )}

              <Typography color="gray" variant="body2">
                Author: Grigori
              </Typography>
              <Typography color="gray" variant="body2">
                Added: {moment(todo.date).fromNow()}
              </Typography>
            </div>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={2}
          >
            <div>
              <ButtonGroup
                size="small"
                aria-label="outlined primary button group"
              >
                {todo.isComplete ? (
                  <Button>
                    <CheckCircleIcon color="success" />
                  </Button>
                ) : (
                  <Button>
                    <CheckCircleIcon color="action" />
                  </Button>
                )}

                <Button>
                  <CreateIcon color="primary" />
                </Button>
                <Button>
                  <DeleteIcon color="secondary" />
                </Button>
              </ButtonGroup>
            </div>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Todo;
