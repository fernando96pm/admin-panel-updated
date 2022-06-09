class UserDummy {
    id: number;
    name: string;
    surname: string;
    company: string | undefined;

    constructor(id: number, name: string, surname: string, company: string | undefined){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.company = company;
    }
}
export default UserDummy;