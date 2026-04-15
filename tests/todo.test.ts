import request from 'supertest';
import app from '../src/app';

describe('Todo API', () => {
  it('should create todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: 'Test Todo' });

    expect(res.statusCode).toBe(201);
  });

  it('should reject invalid payload', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: '' });

    expect(res.statusCode).toBe(400);
  });

  it('should get todo list', async () => {
    const res = await request(app).get('/api/todos');

    expect(res.statusCode).toBe(200);
  });
});