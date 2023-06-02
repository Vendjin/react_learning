import {ITabPanelProps} from "../../common/types/tabs/iTabs";
import {Box} from "@mui/material";
import React from "react";

const TabPanel = ({ children, value, index, ...other }: ITabPanelProps)  => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel