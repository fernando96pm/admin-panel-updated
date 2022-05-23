
import MemberData from './MemberData';

export class Group {
    id: number;
    name: string;
    type: string;
    members: MemberData[] | undefined;

    constructor(id:number, name: string, type: string, members: MemberData[] | undefined){
        this.id = id;
        this.name = name;
        this.type = type;
        this.members = members;
    }

    addMember(member: MemberData){
        if(this.members === undefined){
            this.members = []
        }
        this.members.push(member)
    }
}