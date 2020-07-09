export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}

class User implements IUser {

    public id: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(nameOrUser: string | IUser, email?: string, id?: number, password?: string) {
        if (typeof nameOrUser === 'string') {
            this.name = nameOrUser;
            this.email = email || '';
            this.id = id || -1;
            this.password = password || '';
        } else {
            this.name = nameOrUser.name;
            this.email = nameOrUser.email;
            this.id = nameOrUser.id;
            this.password = nameOrUser.password;
        }
    }
}

export default User;
