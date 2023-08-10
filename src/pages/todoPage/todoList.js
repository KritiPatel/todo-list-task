import React, { useEffect, useState } from "react";
import Task from "./todoAction";
import { List, Typography, Button, Container } from "@mui/material";
import CustomModal from "./modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ADD_MESSAGE,
  CLEAR_CHECKED,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
} from "./components/toastConst";
import CompletedTaskModal from "./completedModal";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [editedItemId, setEditedItemId] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);

  // modals  state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompletedModalOpen, setCompletedModalOpen] = useState(false);

  // ComletTask Related
  const toggleCompletionTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompletedTasks = () => {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    setTasks(incompleteTasks);
    toast.info(CLEAR_CHECKED, { autoClose: 3000 });
  };

  // Add , Update, Delete related functions
  const addTask = (task) => {
    setTasks([...tasks, task]);
    toast.success(ADD_MESSAGE, { autoClose: 3000 });
    closeTaskModal();
  };

  const editTask = (taskId, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
    toast.success(EDIT_MESSAGE, { autoClose: 3000 });
    closeTaskModal();
  };

  const editOnClickHandler = (taskId) => {
    setEditedItemId(taskId);
    openTaskModal();
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    toast.error(DELETE_MESSAGE, { autoClose: 3000 });
  };

  // modals
  const openTaskModal = () => {
    setIsModalOpen(true);
  };

  const closeTaskModal = () => {
    setIsModalOpen(false);
    setEditedItemId(null);
  };

  const openCompletedTasksModal = () => {
    const completed = tasks.filter((task) => task.completed);
    setCompletedTasks(completed);
    setCompletedModalOpen(true);
  };

  return (
    <Container
      maxWidth="md"
      style={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "100px",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          background: "#f5f5f5",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Todo List
        </Typography>
        <h3>Here, You can include a to-do item.</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={clearCompletedTasks}
        >
          Clear Completed
        </Button>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={openTaskModal}
            style={{ marginRight: "10px" }}
          >
            Add Task
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={!tasks.some((task) => task.completed)}
            onClick={openCompletedTasksModal}
          >
            Completed
          </Button>
        </div>
      </div>
      <List>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={toggleCompletionTask}
            onDelete={deleteTask}
            onEdit={editOnClickHandler}
          />
        ))}
      </List>
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeTaskModal}
        taskToEdit={tasks.find((task) => task.id === editedItemId)}
        onSave={editedItemId ? editTask : addTask}
      />
      <CompletedTaskModal
        isOpen={isCompletedModalOpen}
        onClose={() => setCompletedModalOpen(false)}
        tasks={completedTasks}
      />
    </Container>
  );
};

export default TodoList;
