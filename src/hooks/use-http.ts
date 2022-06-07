import { useContext } from 'react';
import AdminPanelContext from '../store/AdminPanelContext';
import Company from '../entities/Company';
import User from '../entities/User'
import { CompanyType, CrysecUserType, GroupType } from '../utils/response-types';
import { Group } from '../entities/Group';



const useHttp = () => {

    const url = `http://localhost:8080`;
    const ctx = useContext(AdminPanelContext);
    const companyId = ctx.companyId;

    const getCompanyHandler = async() => {
        const response = await fetch(`${url}/companies/${companyId}`);
        const data: CompanyType = await response.json();
        const company = new Company(data.id, data.name, data.email);
        ctx.companyHandler(company);
    }

    const getCompanyUsersHandler = async() => {
        const response = await fetch(`${url}/companies/${companyId}/users`);
        const data: CrysecUserType[] = await response.json();
        const users: User[] = data.map(u => new User(u.id, u.name, u.email, undefined))
        ctx.companyUsersHandler(users)
    }

    const getCompanyGroupsHandler = async() => {
        const response = await fetch(`${url}/companies/${companyId}/groups`);
        const data: GroupType[] = await response.json();
        const groups: Group[] = data.map(g => new Group(g.id, g.name, g.type, undefined, undefined));
        ctx.companyGroupsHandler(groups)
        console.log({ groups })
    }

    return {
        companyHandler: getCompanyHandler,
        usersHandler: getCompanyUsersHandler,
        groupsHandler: getCompanyGroupsHandler,
    }
}
export default useHttp