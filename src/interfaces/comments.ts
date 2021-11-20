import { ID } from "./common";

export interface Comment {
  body: string;
  id: ID;
  insertedAt: string;
  remoteIp: string;
  signature: string;
  updatedAt: string;
  url: string;
}
