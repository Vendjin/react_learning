import {Button, styled} from "@mui/material";
import {tokens} from "../../theme/theme";

export const AppButton = styled(Button)(
    ({theme}) => {
        const colors = tokens(theme.palette.mode);
        return ({
            margin: 2,
            marginRight: '16px',
            marginLeft: '16px',
            borderRadius: 4,
            backgroundColor: '#1900D5',
            '&:hover': {
                backgroundColor: '#1900D5 !important',
            }
        })
    });