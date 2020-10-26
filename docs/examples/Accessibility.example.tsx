import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@pickers/material-ui';

export default function BasicDatePicker() {
  const [selectedDate, handleDateChange] = React.useState<Date | null>(new Date());

  return (
    <DatePicker
      label="Accessible"
      value={selectedDate}
      onChange={(date) => handleDateChange(date)}
      renderInput={(props) => <TextField {...props} />}
    />
  );
}
