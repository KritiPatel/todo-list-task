import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Snackbar, TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const CustomModal = ({ isOpen, onClose, taskToEdit, onSave }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setDescription(taskToEdit.description);
    } else {
      setDescription("");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      if (taskToEdit) {
        onSave(taskToEdit.id, description);
      } else {
        onSave({
          id: Date.now(),
          description,
          completed: false,
        });
      }
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ background: "#f5f5f5", marginBottom: "30px" }}>
        {taskToEdit ? "Edit Task" : "Add Task"}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Task Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ marginTop: "15px" }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {taskToEdit ? "Save Changes" : "Add Task"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
