import { MailtrapMailProvider } from '../../providers/impl/MailTrapMailProvider';
import { UsersRepository } from '../../repositories/impl/UsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailTrapMailProvider = new MailtrapMailProvider();
const usersRepository = new UsersRepository();

const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  mailTrapMailProvider,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
