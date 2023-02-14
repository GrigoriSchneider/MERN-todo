import React from "react";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Stack from "@mui/material/Stack";

const Todo = () => {
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
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Learn React
              </Typography>
              <Typography color="gray" variant="body2">
                Author: Grigori
              </Typography>
              <Typography color="gray" variant="body2">
                Added: 2 days agos
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
                <Button>
                  <CheckCircleIcon color="action" />
                </Button>
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
