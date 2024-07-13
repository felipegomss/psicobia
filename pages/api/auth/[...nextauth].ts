import { auth } from "@/lib/firebase";
import { error } from "console";
import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth/next";
import CredentialProviver from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialProviver({
      name: "Credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    }),
  ],
};
export default NextAuth(authOptions);
