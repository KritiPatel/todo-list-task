import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const CompletedTaskModal = ({ isOpen, onClose, tasks }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ background: "#f5f5f5", marginBottom: "30px" }}>
        List of Completed To-Do Items
      </DialogTitle>
      <DialogContent>
        {/* {tasks.map((task) => (
          <div key={task.id} style={{ marginBottom: "8px", marginTop: "10px" }}>
            - {task.description}
          </div>
        ))} */}
        <ul style={{ paddingLeft: "20px" }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                marginBottom: "8px",
                marginTop: "10px",
                fontSize: "1.1rem",
              }}
            >
              {task.description}
            </li>
          ))}
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CompletedTaskModal;
