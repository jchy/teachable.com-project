
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css";

export default function Dropdown() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
        >
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Resources" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{p: 3, background: "rgb(245,245,245)", borderRadius: "10px",position: "absolute",width: "160px"}}>
                        <div className={style.dropdowntext}>
                            <Link to="/podcast" className={style.link}>Podcast</Link>
                        </div>
                        <div className={style.dropdowntext}>
                            <Link to="/teachable:hq" className={style.link}>teachable:hq</Link>
                        </div>
                        <div className={style.dropdowntext}>
                            <Link to="/support" className={style.link}>Support articles</Link>
                        </div>
                        <div className={style.dropdowntext}>
                            <Link to="/downloads" className={style.link}>Downloads</Link>
                        </div>
                </List>
            </Collapse>
        </List>
    );
}
