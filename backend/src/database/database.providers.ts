import { ormConfig } from './orm.config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(ormConfig);
      return dataSource.initialize();
    },
  },
];