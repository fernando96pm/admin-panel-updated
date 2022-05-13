export class User {
    id: number;
    name: string;
    email: string;
    image: string | undefined;

    constructor(id: number, name: string, email: string, image: string | undefined){
        this.id = id;
        this.name = name;
        this.email = email;
        this.image = image;
    }
}
