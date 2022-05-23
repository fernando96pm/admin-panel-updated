import { NavigationLink } from '../interfaces/navigation.interface';
import { MdHome, MdGroup } from 'react-icons/md';
import { VscGraphLine } from 'react-icons/vsc';
import { TiMessages } from 'react-icons/ti';
import { FaUser } from 'react-icons/fa'

export const NAVIGATION_ROUTES: Array<NavigationLink> = [
    {path: '/admin', name: 'Home', icon: <MdHome /> },
    {path: '/admin/users', name: 'Users', icon: <FaUser />},
    {path: '/admin/groups', name: 'Groups', icon: <MdGroup />},
    {path: '/admin/messages', name: 'Messages', icon: <TiMessages />},
    {path: '/admin/graph', name: 'Graph', icon: <VscGraphLine />},
];