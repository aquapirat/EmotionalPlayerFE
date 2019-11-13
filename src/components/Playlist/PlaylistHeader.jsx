import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    height: 48,
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(0, 0),
    padding: theme.spacing(0, 2),
    fontWeight: 600,
    borderBottom: '1px solid #363636',
    color: theme.palette.grey.dark,
  },
}));

const CanvasTableHeader = () => {
  const { tableHeader } = useStyles();

  return (
    <div className={tableHeader}>
      Playlist
    </div>
  );
};

export default CanvasTableHeader;
