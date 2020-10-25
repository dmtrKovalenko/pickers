import * as React from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerMenu from './components/DrawerMenu';
import Github from '../_shared/svgIcons/GithubIcon';
import SettingsIcon from '@material-ui/icons/Settings';
import LightbulbOutlineIcon from '../_shared/svgIcons/LightbulbIcon';
import TextDirectionRtLIcon from '@material-ui/icons/FormatTextdirectionRToL';
import TextDirectionLtrIcon from '@material-ui/icons/FormatTextdirectionLToR';
import { GITHUB_URL } from '_constants';
import { withRouter, WithRouterProps } from 'next/router';
import { utilsMap, UtilsLib } from '../utils/utilsService';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

import {
  Hidden,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Theme,
  Menu,
  MenuItem,
} from '@material-ui/core';
import Logo from '_shared/svgIcons/LogoSmall';
import { UiAdapterSwitch } from './components/UiAdapterSwitch';
import LogoSmall from '_shared/svgIcons/LogoSmall';

interface LayoutProps extends WithRouterProps, WithStyles<typeof styles, true> {
  toggleThemeType: () => void;
  toggleDirection: () => void;
  onChangeUtils: (lib: UtilsLib) => void;
}

const styles = (theme: Theme) =>
  createStyles({
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: 'calc(100% - 250px)',
        left: 250,
      },
    },
    utilsMenuItem: {
      textTransform: 'capitalize',
    },
    main: {
      padding: '24px',
      minHeight: 'calc(100vh - 177px)',
      [theme.breakpoints.up('md')]: {
        marginLeft: 250,
      },
    },
    compensateDrawer: {
      [theme.breakpoints.up('md')]: {
        marginLeft: 250,
      },
    },
    content: {
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1100,
        margin: '0 auto',
      },
    },
    landingMain: {
      padding: 0,
      maxWidth: '100vw',
      marginLeft: 0,
      marginRight: 0,
    },
    landingAppBar: {
      left: 0,
      right: 0,
      width: '100vw',
      boxShadow: 'unset',
    },
  });

class Layout extends React.Component<LayoutProps> {
  state = {
    anchorEl: null,
    drawerOpen: false,
    selectedIndex: Object.keys(utilsMap).findIndex((lib) => lib === 'date-fns'),
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  handleUtilsMenuOpen = (event: React.MouseEvent<any>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleUtilsChange = (e: React.MouseEvent<any>, index: number) => {
    this.props.onChangeUtils(Object.keys(utilsMap)[index] as UtilsLib);
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  scrollToContent = () => {
    const contentEl = document.getElementById('content');
    contentEl!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, toggleThemeType, toggleDirection, theme, router } = this.props;
    const isLanding = (router || location).pathname === '/';

    return (
      <React.Fragment>
        <header className="text-gray-700 body-font">
          <div
            className={clsx(
              'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center',
              { [classes.compensateDrawer]: !isLanding }
            )}
          >
            <Hidden mdUp={!isLanding}>
              <button
                onClick={this.handleDrawerToggle}
                className="flex title-font focus:outline-none font-medium items-center text-gray-900 mb-4 md:mb-0"
              >
                <LogoSmall />
                <span className="ml-3 text-xl">pickers</span>
              </button>
            </Hidden>

            {!isLanding && <UiAdapterSwitch />}

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Tooltip title="Toggle light/dark theme" enterDelay={300}>
                <IconButton
                  data-mui-test="toggle-theme-btn"
                  color="inherit"
                  onClick={toggleThemeType}
                >
                  <LightbulbOutlineIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Toggle direction" enterDelay={300}>
                <IconButton color="inherit" onClick={toggleDirection}>
                  {theme.direction === 'rtl' ? <TextDirectionLtrIcon /> : <TextDirectionRtLIcon />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Github" enterDelay={300}>
                <IconButton
                  className="unstyled-link"
                  color="inherit"
                  component="a"
                  href={GITHUB_URL}
                >
                  <Github color="inherit" />
                </IconButton>
              </Tooltip>
            </nav>
          </div>
        </header>

        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.drawerOpen}
            onClose={this.handleDrawerToggle}
            onClick={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerMenu />
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            variant={isLanding ? 'temporary' : 'permanent'}
            open={this.state.drawerOpen}
            onClose={this.handleDrawerToggle}
          >
            <DrawerMenu />
          </Drawer>
        </Hidden>

        <main
          className={clsx(classes.main, {
            dark: theme.palette.type === 'dark',
            [classes.landingMain]: isLanding,
          })}
        >
          <div
            className={clsx(classes.content, {
              [classes.landingMain]: isLanding,
            })}
          >
            {this.props.children}
          </div>
        </main>

        <footer
          className={clsx('text-gray-700 mx-auto max-w-screen-xl mt-8 body-font', {
            [classes.compensateDrawer]: !isLanding,
          })}
        >
          <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font mb-4 font-medium items-center md:justify-start justify-center text-gray-900">
              <Logo size={24} />
              <span className="ml-3 text-xl">pickers</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © 2020 pickers —
              <a
                href="https://twitter.com/dmtrKovalenko"
                className="text-gray-600 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                @dmtrKovalenko
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mx-4 mb-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(Layout));
