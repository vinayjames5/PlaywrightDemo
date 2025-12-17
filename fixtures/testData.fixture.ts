import { LoginUsers, User } from '../test-data/userTestData';

export type TestDataFixtures = {
  users: User[];
};

export const testDataFixtures = {
  users: async ({}, use: (users: User[]) => Promise<void>) => {
    const users = new LoginUsers().getUsers();
    await use(users);
  }
};
