import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom"
import { orange, grey } from '@mui/material/colors';

const BottomNavBar = () => {
    const [value, setValue] = useState(0);
    return (
        <Box className="bottomNavBar">

            <BottomNavigation
            sx={{
                
                "& .MuiBottomNavigationAction-root": {
                    color: `${grey[400]} `,
                },
                "& .MuiBottomNavigationAction-root.Mui-selected": {
                    color: `${orange[400]} `,
                },

                
            }}
                className="bottomNav"
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction component={Link} to="/"  icon={<StorefrontIcon />} />
                <BottomNavigationAction component={Link} to="/cart"  icon={<ShoppingCartIcon />} />
                <BottomNavigationAction component={Link} to="/account"  icon={<AccountCircleIcon />} />
            </BottomNavigation>

        </Box>
    );
};

export default BottomNavBar;