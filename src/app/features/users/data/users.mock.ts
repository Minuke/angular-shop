import { User } from '@core/models/user.interface';

export const USERS: User[] = [
  { id: 1, name: 'Laura Gómez', email: 'laura@angularshop.test', role: 'admin', active: true },
  { id: 2, name: 'Carlos Ruiz', email: 'carlos@angularshop.test', role: 'customer', active: true },
  { id: 3, name: 'Marta Díaz', email: 'marta@angularshop.test', role: 'customer', active: true },
  { id: 4, name: 'Pablo Sanz', email: 'pablo@angularshop.test', role: 'customer', active: false },
];