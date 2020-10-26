import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker } from '@pickers/material-ui';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  spacing: 2,
});

export default function CssThemeExample() {
  const [selectedDate, handleDateChange] = React.useState<Date | null>();

  return (
    <ThemeProvider theme={muiTheme}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="2px spacing"
        value={selectedDate}
        onChange={(date) => handleDateChange(date)}
      />
    </ThemeProvider>
  );
}
