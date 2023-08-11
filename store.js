
import { Store, registerInDevtools } from "pullstate";


export const AuthStore = new Store({
  isLoggedIn: false,
});
export const ProfileDetails = new Store({
  profileDetails: '',
});

registerInDevtools({AuthStore,ProfileDetails});




