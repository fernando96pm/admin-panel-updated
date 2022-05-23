import { User } from "./User";

class MemberData extends User {
    isAdmin:boolean;

    constructor(id: number, name: string, email:string, image:string | undefined, isAdmin: boolean){
        super(id, name, email, image)
        this.isAdmin = isAdmin; 
    }
    setIsAdmin(isAdmin:boolean){
        this.isAdmin = isAdmin;
    }
}
export default MemberData