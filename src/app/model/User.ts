export class User {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string
  ) {}
}

export type IUser = {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};
