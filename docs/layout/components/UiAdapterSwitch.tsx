import React from 'react';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// @ts-ignore
import MuiLogo from './mui-logo.png';
import TailwindLogo from './tailwind.png';
import ReactLogo from './react.png';
import { Typography } from '@material-ui/core';

export function UiAdapterSwitch() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'adapter-switch' : undefined;

  return (
    <div>
      <button onClick={handleClick} onBlur={handleClick} className="flex items-center">
        <img alt="Material-UI" height={48} width={48} src={MuiLogo} />
        <span className="ml-3 text-2xl"> Material-UI </span>
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition placement="bottom-start">
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={350}>
            <Paper className="w-64 py-2 origin-top-left">
              <div className="ml-4">
                <Typography variant="overline"> UI Adapter </Typography>
              </div>

              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <img alt="Material-UI" height={48} width={48} src={MuiLogo} />
                  </ListItemIcon>
                  <ListItemText primary="Material-UI" />
                </ListItem>
                <Divider />
                <ListItem button disabled>
                  <ListItemIcon>
                    <img alt="Tailwind" height={48} width={48} src={TailwindLogo} />
                  </ListItemIcon>
                  <ListItemText primary="TailwindCss" />
                </ListItem>
                <Divider />
                <ListItem button disabled>
                  <ListItemIcon>
                    <img alt="Pure React" height={48} width={48} src={ReactLogo} />
                  </ListItemIcon>
                  <ListItemText primary="Pure React" />
                </ListItem>
              </List>

              <p className="mx-4 my-4 text-sm">
                We are now support only Material-UI. But we are working on support more UI outputs.
                <br /> Vote for the next adapter 🙈
              </p>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
