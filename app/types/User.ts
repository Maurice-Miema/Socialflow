
export interface User {
    id: string
    name: string
    firstname: string
    email: string
}

export interface ConnectedUser extends User {
    facebookConnected: boolean;
    linkedinConnected: boolean;
}
