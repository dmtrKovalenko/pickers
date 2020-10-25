import * as React from 'react';
import clsx from 'clsx';
import EventIcon from '@material-ui/icons/Event';

export default function LogoSmall({ size = 24 }: { size?: number }) {
  return (
    <div
      className={clsx('shadow w-10 h-10 p-2 flex items-center shadow-md bg-primary rounded-full')}
    >
      <EventIcon htmlColor="white" />
    </div>
  );
}
