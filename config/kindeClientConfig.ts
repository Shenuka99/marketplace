import { KindeSDK } from "@kinde-oss/react-native-sdk-0-7x";

const YOUR_KINDE_ISSUER  = process.env.EXPO_PUBLIC_KINDE_ISSUER_URL as string
const YOUR_KINDE_REDIRECT_URI = process.env.EXPO_PUBLIC_KINDE_POST_CALLBACK_URL as string
const YOUR_KINDE_CLIENT_ID = process.env.EXPO_PUBLIC_KINDE_CLIENT_ID as string
const YOUR_KINDE_LOGOUT_REDIRECT_URI =process.env.EXPO_PUBLIC_KINDE_POST_LOGOUT_REDIRECT_URL as string

export const client = new KindeSDK(YOUR_KINDE_ISSUER, YOUR_KINDE_REDIRECT_URI, YOUR_KINDE_CLIENT_ID, YOUR_KINDE_LOGOUT_REDIRECT_URI);


export const handleLogout = async () => {
  const loggedOut = await client.logout();
  if (loggedOut) {
    console.log('logged out')
  }
};