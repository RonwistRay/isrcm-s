import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function BasicSelect() {
  return (
    <div className="BasicSelect">
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
         Seleccione Cursos Disponibles
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'Seleccione Cursos Disponibles',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
    </div>
  );
}
