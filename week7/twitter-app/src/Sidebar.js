import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/TwitterIcon';
import SidebarOpt from './SidebarOpt';
import HomeIcon from '@material-ui/icons/HomeIcon';
import ExploreIcon from '@material-ui/icon/ExploreIcon';
import SearchIcon from '@material-ui/icons/SearchIcon';
import MailOutlineIcon from '@material-ui/icons/MailOutlineIcon';
import BookmarkBorderIcon from '@material-ui/icon/BookmarkBorderIcon';
import ListAltIcon from '@material-ui/icons/ListAltIcon';
import PermIdentityIcon from '@material-ui/icons/PermIdentityIcon';
import MoreHorizIcon from '@material-ui/icons/MoreHorizIcon';



function Sidebar () {
    return (
        <div className= "Sidebar">
            
            <TwitterIcon/>

            <SidebarOpt active Icon= {HomeIcon} text ='Home'/>
            <SidebarOpt Icon= {ExploreIcon} text ='Explore'/>
            <SidebarOpt Icon= {SearchIcon} text ='Search'/>
            <SidebarOpt Icon= {MailOutlineIcon} text='Notification'/>
            <SidebarOpt Icon= {BookmarkBorderIcon} text='Notification'/>
            <SidebarOpt Icon= {ListAltIcon} text='Notification'/>
            <SidebarOpt Icon= {PermIdentityIcon} text='Notification'/>
            <SidebarOpt Icon= {MoreHorizIcon} text='Notification'/>
                                    
            { /* Button -> Tweet */}
        </div>
    )
}

export default Sidebar;