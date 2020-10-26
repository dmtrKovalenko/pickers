import * as React from 'react';
import Ad from 'components/Ad';
import Code from 'components/Code';
import PropTypesTable from 'components/PropTypesTable';
import KawaiiIcon from 'components/svgIcons/KawaiiIcon';
import { PageMeta } from 'components/PageMeta';
import { useRouter } from 'next/router';
import { Grid, makeStyles } from '@material-ui/core';

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

const Docs: React.FC = () => {
  const router = useRouter();
  const classes = useStyles();
  const componentName = router?.query?.component as any; // just crash if name is invalid

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
      <Code language="jsx">{`import { ${componentName} } from '@pickers/material-ui'`}</Code>

      <PropTypesTable src={componentName} />
    </React.Fragment>
  );
};

export default Docs;
