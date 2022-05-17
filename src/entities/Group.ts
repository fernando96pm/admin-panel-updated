import { User } from "./User";
export class Group {
    id: number;
    name: string;
    type: string;
    members: User[] | undefined;

    constructor(id:number, name: string, type: string, members: User[] | undefined){
        this.id = id;
        this.name = name;
        this.type = type;
        this.members = members;
    }

    addMember(user:User){
        if(this.members === undefined){
            this.members = []
        }
        this.members.push(user)
    }
}