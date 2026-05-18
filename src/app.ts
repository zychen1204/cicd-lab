import Fastify, { FastifyServerOptions } from 'fastify';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  app.get('/', async () => {
    return {
      message: 'CI/CD Lab Fastify app is running',
      version: 123  // ❌ 故意製造型別錯誤：version 應該是 string，不是 number
    };
  });

  app.get('/health', async () => {
    return {
      status: 'ok'
    };
  });

  return app;
}
