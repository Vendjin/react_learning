import {AutoGraphOutlined, AutoStoriesOutlined, HomeOutlined, SettingsOutlined,} from '@mui/icons-material';

export const navMenu = [
    {
        id: 1,
        name: 'Главная',
        icon:  <HomeOutlined/>,
        path: '/'
    },
    {
        id: 2,
        name: 'Избранное',
        icon:  <AutoGraphOutlined/>,
        path: '/watchList'
    },
    {
        id: 3,
        name: 'Новости',
        icon:  <AutoStoriesOutlined/>,
        path: '/news'
    },
    {
        id: 4,
        name: 'Настройки',
        icon:  <SettingsOutlined/>,
        path: '/settings'
    },


]