import { getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async save(user: User): Promise<void> {
    const repository = getRepository(User);
    repository.save(user);
  }

  async findAll(): Promise<User[]> {
    const repository = getRepository(User);
    return repository.find();
  }
}
