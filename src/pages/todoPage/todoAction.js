import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { ListItem, ListItemText, ListItemSecondaryAction } from "@mui/material";

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      <ListItemText
        primary={task.description}
        className={task.completed ? "completed" : ""}
      />
      <ListItemSecondaryAction sx={{ display: "flex", gap: "10px" }}>
        <Button
          onClick={() => onEdit(task.id)}
          variant="outlined"
          color="primary"
        >
          Edit
        </Button>
        <Button
          onClick={() => onDelete(task.id)}
          variant="outlined"
          color="secondary"
        >
          Delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;
