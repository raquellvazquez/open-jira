import { useContext } from 'react';
import { Drawer, Typography, Box, List, ListItem, ListItemText, ListItemIcon, Divider, ListItemButton } from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { UIContext } from '../../context/ui';

const items = ['inbox','drafts']

export const Sidebar = () => {


  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer
      anchor='left'
      open={sideMenuOpen}
      onClose={closeSideMenu }
    >
        <Box sx={{width: 250}}>
            <Box sx={{padding: '5px 10px'}}>
                <Typography variant="h4"> Menú</Typography>
            </Box>

            <List>
                {
                    items.map((text, index) =>(
                        <ListItem button key={text} >
                            <ListItemIcon>
                                {index%2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
                
            <List>
                {
                    items.map((text, index) =>(
                        <ListItemButton key={text} >
                            <ListItemIcon>
                                {index%2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ))
                }
            </List>

        </Box>
    </Drawer>
  )
}
