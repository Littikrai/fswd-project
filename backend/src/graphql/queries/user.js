import { UserTC } from "../../models";

export const users = UserTC.getResolver("findMany");
