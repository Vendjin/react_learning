import {styled} from "@mui/material";
import {tokens} from "../../theme/theme";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";

export const TableContainerBlock = styled(TableContainer)
(({theme}) => {
    const colors = tokens(theme.palette.mode);
    return {
        marginTop: 32,
        backgroundColor: `${theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary.DEFAULT}`,
        padding: '20px 16px',
        border: '1px solid',
        borderColor: `${theme.palette.mode === 'dark' ? colors.gray.DEFAULT : colors.gray[100]}`,
        borderRadius: 12,
        '& .MuiTableCell-head': {
            color: colors.secondary.DEFAULT,
        }
    };
});

export const TableCellColored = styled(TableCell)(
    () => ({
        "&.positive": {
            color: '#A9FFA7',
        },
        '&.negative': {
            color: '#FFA7A7',
        },
    })
)