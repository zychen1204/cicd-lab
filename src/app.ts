import Fastify, { FastifyServerOptions } from 'fastify';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  app.get('/', async () => {
    const response: { message: string; version: string } = {
      message: 'CI/CD Lab Fastify app is running',
      version: process.env.APP_VERSION || 'dev' //回傳正確形別: String
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
