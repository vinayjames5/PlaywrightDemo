export interface User {
  username: string;
  password: string;
}

export class LoginUsers {
  private users: User[];

  constructor() {
    this.users = [
      {
        username: 'standard_user',
        password: 'secret_sauce'
      },
      {
        username: 'problem_user',
        password: 'secret_sauce'
      },
      {
        username: 'performance_glitch_user',
        password: 'secret_sauce'
      },
      {
        username: 'error_user',
        password: 'secret_sauce'
      },
      {
        username: 'visual_user',
        password: 'secret_sauce'
      }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
}
