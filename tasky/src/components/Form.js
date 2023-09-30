import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

// const priorities = [
//   {
//     value: 'L',
//     label: 'Low',
//   },
//   {
//     value: 'M',
//     label: 'Medium',
//   },
//   {
//     value: 'H',
//     label: 'High',
//   },
// ];

const AddTaskForm = (props) => {
  
  const priorities = [
    {
      value: 'Low',
      label: 'Low',
    },
    {
      value: 'Medium',
      label: 'Medium',
    },
    {
      value: 'High',
      label: 'High',
    },
  ];

  return (
    <Box
      component="form"
      sx={{
        '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
      }}
      onSubmit={props.submit}
    >
        <div>
        <TextField
          required
          id="outlined-required"
          name="title"
          label="Task Title"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <TextField
          required
          name="deadline"
          label="Deadline"
          InputLabelProps={{ shrink: true }}
          type="date"
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <TextField
          required
          select
          name="priority"
          label="Priority"
          defaultValue="None"
          type="priority"
          onChange={(event) => props.change(event)}
        >
          {priorities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          name="description"
          id="outlined-multiline-static"
          label="Task Details"
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <Button 
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            m: 1,
            p: 1,
            width: '95%'
          }}
        >
          Add Task
        </Button>
      </div>
    </Box>
  )
};

export default AddTaskForm;