import React, {FC, SyntheticEvent, useEffect, useState} from 'react';
import {MainBox} from "../../components/mainBox/mainBox";
import {Box, Tab, Tabs} from "@mui/material";
import {tabProps} from "../../utils/helpers";
import PersonalInfoSettings from "../../components/personaInfoSettings/personalInfoSettings";
import {getPublicUser} from "../../store/thunks/auth/authThunk";
import {useAppDispatch} from "../../utils/hook";
import ChangePassword from '../../components/changePassword/changePassword';
import DeleteAccount from '../../components/deleteAccount/deleteAccount';
import TabPanel from '../../components/tabPanel/tabPanel';


const Settings: FC = (): JSX.Element => {
    const [value, setValue] = useState(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        try {
            const id = sessionStorage.getItem('id')
            dispatch(getPublicUser(id))
        } catch (e) {
            console.log(e)
        }
    }, [dispatch])

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <MainBox>
            <Box sx={{borderBottom: 1, borderColor: 'divider', marginBottom: 10}}>
                <Tabs value={value}
                      onChange={handleChange}
                      aria-label="Settings tabs"
                      textColor='inherit'
                      TabIndicatorProps={{style: {background: "blue"}}}
                >
                    <Tab label="Изменить персональные данные" {...tabProps(0)} />
                    <Tab label="Изменить пароль" {...tabProps(1)} />
                    <Tab label="Удалить аккаунт" {...tabProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <PersonalInfoSettings/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ChangePassword/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DeleteAccount/>
            </TabPanel>
        </MainBox>
    );
};

export default Settings;