import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@pickers/material-ui';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <DatePicker
      label="Basic example"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      renderInput={(props) => <TextField {...props} />}
    />
  );
}
