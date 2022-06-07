
import MemberData from './MemberData';

export class Group {
    id: number;
    name: string;
    type: string;
    url_image: string | undefined;
    members: MemberData[] | undefined;

    constructor(id:number, name: string, type: string, url_image: string | undefined, members: MemberData[] | undefined){
        this.id = id;
        this.name = name;
        this.type = type;
        this.url_image = url_image;
        this.members = members;
    }

    addMember(member: MemberData){
        if(this.members === undefined){
            this.members = []
        }
        this.members.push(member)
    }
}