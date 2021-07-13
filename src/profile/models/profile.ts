export class EditProfile {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  bio: string;
  github: string;
  birthday: string;
  gender: string;
  technology: Array<number>;
}

export class Profile extends EditProfile{
  id: number;
  avatar: string;
  date_joined: string;
  first_login: string;
}
export class EditWall {
  title: string;
  text: string;
}
