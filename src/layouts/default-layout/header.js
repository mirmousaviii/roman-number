import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

function Header() {
  return (
      <Toolbar>
        <Typography variant="h6">
          Roman Number
        </Typography>
      </Toolbar>
  );
}

export default Header;