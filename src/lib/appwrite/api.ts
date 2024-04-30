import { INewUser, User } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID,Query } from 'appwrite'

export const createUserAccount = async (user : INewUser) => {
    console.log(user.username);
  try {
    const newAccount  = await account.create(
        ID.unique(),
        user.email,
        user.password,
        user.name,
    )
    console.log(newAccount)
    if(!newAccount) throw  Error;
    const avatarURL = avatars.getInitials(newAccount.name);
    const newUser = await saveUserToDB({
        name : newAccount.name,
        username : newAccount.name,
        imgURL : avatarURL,
        email : newAccount.email,
        accountId : newAccount.$id
    })
    return newUser;
  } catch (error) {
    console.log(error)
  }
};
export const saveUserToDB = async (user : {
    name : string,
    username: string;
    email: string;
    imgURL : URL;
    accountId : string;
}) => {
try {
    const newUser = await databases.createDocument(
        appwriteConfig.DatabaseId, 
        appwriteConfig.userCollectionId,
        ID.unique(),
        user,
    );
    return newUser;
} catch (error) {
    console.log(error);
}
};
export const signInAccount = async (user :{email : string,password : string}) => {
    const session = await account.createEmailPasswordSession(
        user.email,
        user.password
    );
    return session;
};
export const getAccount = async () => {
    try {
        const currentAccount = await account.get();
        return currentAccount;
      } catch (error) {
        console.log(error);
      }
};
export async function getCurrentUser() {
    try {
      const currentAccount = await getAccount();
      
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        appwriteConfig.DatabaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
      console.log(currentUser.documents[0]);
      console.log('currentUser.documents[0]');
      return currentUser.documents[0];
      
    } catch (error) {
      console.log(error);
      return null;
    }
  }

