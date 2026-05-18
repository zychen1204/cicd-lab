import Fastify, { FastifyServerOptions } from 'fastify';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  app.get('/', async () => {
    const response: { message: string; version: string } = {
      message: 'CI/CD Lab Fastify app is running',
      version: 123 // ❌ TypeScript 型別錯誤：number 不能賦值給 string
    };
    return response;
  });

  app.get('/health', async () => {
    return {
      status: 'ok'
    };
  });

  return app;
}
