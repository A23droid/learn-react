import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // method to directly login (singup => no need to manually login)
                this.login(email, password);
            } else {
                return userAccount; // we'll handle null and other such sus cases
            }

        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
            
        } catch (error) {
            throw error
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions(); // logout from all the devices
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService;

export default authService;