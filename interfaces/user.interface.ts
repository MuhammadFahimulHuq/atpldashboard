export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    fullName: string;
    profilePicture: string;
    registeredAt: Date;
    role: {
        name: string;
        permissions: string[];
    };
}
