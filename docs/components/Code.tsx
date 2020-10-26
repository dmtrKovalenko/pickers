import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { highlight } from '../utils/prism';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '1em',
    color: theme.palette.text.primary,
    overflowY: 'auto',
    backgroundColor: '#011627',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    '& pre': {
      padding: 0,
      margin: '16px !important',
    },
  },
  inlineRoot: {
    background: 'transparent',
    '& pre': {
      background: 'transparent',
    }
  },
  inlineCode: {
    fontSize: 14,
    whiteSpace: 'pre-wrap',
  },
  margin: {
    margin: '10px 0 30px',
  },
}));

interface CodeProps {
  children: string;
  inline?: boolean;
  noMargin?: boolean;
  language?: 'jsx' | 'typescript' | 'markup';
}

const Code: React.FC<CodeProps> = ({ language = 'typescript', inline, children, noMargin }) => {
  const classes = useStyles();
  const highlightedCode = highlight(children, language);

  return (
    <div
      className={clsx(classes.root, {
        [classes.margin]: noMargin,
        [classes.inlineRoot]: inline
      })}
    >
      <pre>
        <code
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className={clsx({
            [classes.inlineCode]: inline,
          })}
        />
      </pre>
    </div>
  );
};

Code.defaultProps = {
  noMargin: false,
  language: 'jsx',
};

export default Code;
