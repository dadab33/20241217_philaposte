import { Person } from "../interfaces/person";

export class User implements Person {
    lastName?: string;
    firstName?: string;
    login?: string;

    constructor(lastName?: string, firstName?: string, login?: string) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.login = login;
    }
}
