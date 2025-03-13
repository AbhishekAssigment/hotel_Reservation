import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px'
  },
  navRight: {
    marginLeft: 'auto'
  }
});

export default function Header({ loggedIn }) {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // Reload the page to reset the state
  };

  const handleMenuClick = () => {
    // Redirect to home page (/) when clicking on the "Menu" button
    window.location.href = '/signup';
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link component={RouterLink} to="/" className={classes.link}>
          Home
        </Link>
        <Link component={RouterLink} to="/about" className={classes.link}>
          About
        </Link>
        <Link component={RouterLink} to="/contact" className={classes.link}>
          Contact
        </Link>

        <div className={classes.navRight}>
          {loggedIn ? (
            <>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              
              <Button color="inherit" onClick={handleMenuClick}>
                Menu
              </Button>
              <Button color="inherit">
                <Link component={RouterLink} to="/" className={classes.link}>
                  Logout
                </Link>
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
