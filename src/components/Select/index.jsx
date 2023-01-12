import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function Select(props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ fontSize: '2rem'}}>
          {props.name}
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: `${props.name}`,
            id: 'uncontrolled-native',
          }}
          sx={{ fontSize: '2rem'}}
        >
          <option value={props.value[0]}>{props.value[0]}</option>
          <option value={props.value[1]}>{props.value[1]}</option>
          <option value={props.value[2]}>{props.value[2]}</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}