import React, { useState} from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {images} from '@/images/images'
import { navbar } from '@/constants/navbar/navbar';
import { icons } from '@/icons/icons';
import { IconButton, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

const navitems = {
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    fontFamily: 'Inter',
    // backgroundColor: 'red',
}

const btnStyle = {
    background: '#5A20CB',
    borrderRadius: '5px',
    padding: '13px 40px', 
}

const shopStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: '2px', 
    color: '#000'
}

const Test = () => {
    console.log("La fonction Test a été appelée.");
}




const Header = () => {

    const [anchorElNav, setAnchorElNav] = useState<EventTarget | null>(null)

    const handleOpenNavMenu = (event: React.MouseEvent) => {
        setAnchorElNav(event.currentTarget);
      }
      
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      }
      

    return (
        <AppBar 
            sx={{
                background: 'white',
                height: '80px',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Container>
                <Toolbar disableGutters>
                    {/* Box section images */}
                    <Link href='#'>
                        <Box 
                            sx={{
                                display: {xs: 'none', md: 'none', lg: 'flex'}
                            }}>
                            <Image src={images.Logo} alt='logo' width={30} height={30} />
                        </Box>
                    </Link>
                    {/* Box section navitems */}
                    <Box 
                        sx={{
                            flexGrow: 1,
                            display: {xs: 'flex', md: 'none', lg: 'none'},
                        }}>
                        {/* Box section responsive navitem and menu */}
                        {<icons.IconButton
                            size='large'
                            aria-label='senlivre'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            >
                            {<icons.MenuIcon />}
                        </icons.IconButton>}
                        <Popover
                            sx={{
                                display:{xs:'block', md:'none'},
                                // background:'red',
                            }}
                            id='menu-appbar'
                            anchorEl={anchorElNav as Element | null}
                            keepMounted
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}>
                            {navbar.map((nav, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={handleCloseNavMenu}>
                                    <Link 
                                        style={{textDecoration: 'none', color: 'black'}}
                                        href={`#${nav.url}`}>
                                        <Typography sx={{...navitems}}>{nav.path}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Popover>
                    </Box>

                    
                    
                    {/*  */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display:{xs:'none', md:'flex'},
                            justifyContent:{xs:'center', md:'center'}, 
                            alignItems:{xs:'center', md:'center'}, 
                        }}>
                        {navbar.map((nav, index) => (
                            <Button
                                sx={{
                                    color: 'whitesmoke',
                                    display: 'flex',
                                    padding: '0 15px'
                                }}
                                key={index}
                                onClick={handleCloseNavMenu}>
                                <Link 
                                    style={{textDecoration: 'none', color: 'black'}}
                                    href={`#${nav.url}`}>
                                    <Typography sx={{...navitems}}>{nav.path}</Typography>
                                </Link>
                            </Button>
                        ))}
                    </Box>
                    {/* Box Section connexion et panier */}
                    <Box 
                        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                        <Button variant='contained' sx={{...btnStyle}}>
                            <Typography 
                                sx={{...navitems, textTransform: 'none', color: 'white'}}>
                                Login
                            </Typography>
                        </Button>
                        <Button sx={{...shopStyle}}>
                            {<icons.ShoppingCartIcon />}
                            <span style={{color: '#5A20CB'}}>0</span>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
