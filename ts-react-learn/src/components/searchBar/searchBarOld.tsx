import React from 'react';
import {IconButton, InputBase} from "@mui/material";
import {Search} from "@mui/icons-material";
import {SearchGridOld} from "../topBar/styles";

const SearchBarOld = () => {
    return (
        <SearchGridOld>
            <IconButton sx={{'&:hover': {background: 'transparent'}}}>
                <Search/>
            </IconButton>
            <InputBase sx={{padding: '12px 18px'}}
                       placeholder={'Поиск'}
            />
        </SearchGridOld>
    );
};

export default SearchBarOld;