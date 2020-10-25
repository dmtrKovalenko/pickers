import * as React from 'react';
import Ad from '_shared/Ad';
import Code from '_shared/Code';
import PropTypesTable from '_shared/PropTypesTable';
import KawaiiIcon from '_shared/svgIcons/KawaiiIcon';
import { PageMeta } from '_shared/PageMeta';
import { WithRouterProps, withRouter } from 'next/router';
import { Typography, Grid, makeStyles } from '@material-ui/core';

const internalComponents = ['Calendar', 'ClockView', 'Day'];
const useStyles = makeStyles((theme) => ({
  kawaiiIcon: {
    marginTop: 48,
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      order: 2,
    },
  },
}));

const Docs: React.FC<WithRouterProps> = ({ router }) => {
  const classes = useStyles();
  const componentName = router!.query!.component! as any; // just crash if name is invalid

  const title = `${componentName} API`;
  const description = `Here you can find the full list and description for ${componentName} props.`;

  return (
    <React.Fragment>
      <PageMeta title={title} description={description} />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item md={6} className={classes.title}>
          <h1>{title}</h1>
          <p>{description}</p>
          <Ad />
        </Grid>
        <Grid item md={6} container alignItems="flex-end" justifyContent="center">
          <KawaiiIcon className={classes.kawaiiIcon} size={220} />
        </Grid>
      </Grid>
      <h2> Import </h2>
      <Code language="jsx">{`import { ${componentName} } from '@material-ui/pickers'`}</Code>

      <PropTypesTable src={componentName} />
    </React.Fragment>
  );
};

export default withRouter(Docs);
