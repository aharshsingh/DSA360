import { defineConfig } from 'drizzle-kit';
import config from './src/config';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: config.DATABASE_URL!,
  },
});
