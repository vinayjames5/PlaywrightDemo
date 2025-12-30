export interface User {
  username: string;
  password: string;
}

export class LoginUsers {
  private users: User[];
   password = process.env.PASSWORD as string;

  constructor() {
    this.users = [
      {
        username: 'standard_user',
        password: this.password
      },
      {
        username: 'problem_user',
        password: this.password
      },
      {
        username: 'performance_glitch_user',
        password: this.password
      },
      {
        username: 'error_user',
        password: this.password
      },
      {
        username: 'visual_user',
        password: this.password
      }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
}
