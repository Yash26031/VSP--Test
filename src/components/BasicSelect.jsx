/** @format */

import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ sendData }) {
  const [filter, setFilter] = React.useState("Last Edited");

  const handleChange = (event) => {
    setFilter(event.target.value);
    sendData(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value={"Last Edited"}>Last Edited</MenuItem>
          <MenuItem value={"A - Z"}>A - Z</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
