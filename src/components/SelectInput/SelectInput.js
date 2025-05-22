import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectInput = () => {
  const [difficulty, setDifficulty] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setDifficulty(event.target.value);
  };
  return (
    <div>
      <h2>First choose difficulty</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-autowidth-label'>
            Difficulty
          </InputLabel>
          <Select
            labelId='demo-simple-select-autowidth-label'
            id='demo-simple-select-autowidth'
            value={difficulty}
            onChange={handleChange}
            autoWidth
            label='Difficulty'
          >
            <MenuItem value=''>{/* <em>None</em> */}</MenuItem>
            <MenuItem value={20}>Easy</MenuItem>
            <MenuItem value={21}>Medium</MenuItem>
            <MenuItem value={22}>Hard</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SelectInput;
