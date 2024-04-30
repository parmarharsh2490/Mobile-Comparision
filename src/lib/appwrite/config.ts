import { Client, Account ,Databases, Avatars} from "appwrite";

export const appwriteConfig = {
    projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url : import.meta.env.VITE_APPWRITE_URL,
    userCollectionId  : import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    wishlistCollectinId  : import.meta.env.VITE_APPWRITE_WISHLIST_COLLECTION_ID,
    DatabaseId : import.meta.env.VITE_APPWRITE_DATABASE_ID,
}
const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_URL) 
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);             

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);