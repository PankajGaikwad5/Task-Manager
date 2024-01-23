import NextAuth from 'next-auth/next';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import connectMongoDB from '../../../../libs/mongodb';
// import User from '../../../../models/user';
// import bcrypt from 'bcryptjs';

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {},

//       async authorize(credentials) {
//         const { email, password } = credentials;

//         try {
//           await connectMongoDB();
//           const user = await User.findOne({ email });

//           if (!user) {
//             return null;
//           }

//           const passwordMatch = await bcrypt.compare(password, user.password);

//           if (!passwordMatch) {
//             return null;
//           }

//           return user;
//         } catch (error) {
//           console.log(error);
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: '/',
//   },
// };
import { authOptions } from './authOptions';
const handler = NextAuth(authOptions);

// export default handler;
export { handler as GET, handler as POST };

// const handler = NextAuth(authOptions);

// export { authOptions };
// export { handler as GET, handler as POST };
// const handler = NextAuth(authOptions);

// export default handler;
// export const GET = handler;
// export const POST = handler;
// export { authOptions };
// export default handler;

// Export named functions for HTTP methods
// export const GET = (req, res) => handler(req, res);
// export const POST = (req, res) => handler(req, res);
