import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navItems";

export default function Sidebar({ open, onClose }) {
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (id) => {
    setOpenGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const DrawerList = (
    <Box sx={{ width: 260 }} role="presentation">
      <List>
        {NAV_ITEMS.map((section) => (
          <Box key={section.id}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => toggleGroup(section.id)}>
                <ListItemText primary={section.label} />
                {openGroups[section.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={openGroups[section.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                {section.children.map((child) => (
                  <ListItem key={child.id} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={child.path}
                      onClick={onClose}
                    >
                      <ListItemText primary={child.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={onClose} variant="temporary">
      {DrawerList}
    </Drawer>
  );
}
