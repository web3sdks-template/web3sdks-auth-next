import { Web3sdksAuth } from "@web3sdks/auth/next";

export const { Web3sdksAuthHandler, getUser } = Web3sdksAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  domain: "example.com",
});

export default Web3sdksAuthHandler();
