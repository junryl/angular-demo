export class Person{
    id: number;
    name: string;
    title: string;
    description: string;
    photoUrl: string;

    constructor(id: number, name: string, title: string, description: string, photoUrl: string){
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.photoUrl = photoUrl;
    }

}