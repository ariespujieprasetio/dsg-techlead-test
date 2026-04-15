import { Router } from 'express';
import prisma from '../lib/prisma';
import {
  createTodoSchema,
  updateTodoSchema
} from '../validations/todo.schema';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const data = createTodoSchema.parse(req.body);
    const todo = await prisma.todo.create({ data });

    res.status(201).json(todo);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (_req, res) => {
  const todos = await prisma.todo.findMany({
    orderBy: { id: 'desc' }
  });

  res.json(todos);
});

router.get('/:id', async (req, res) => {
  const todo = await prisma.todo.findUnique({
    where: { id: Number(req.params.id) }
  });

  if (!todo) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json(todo);
});

router.patch('/:id', async (req, res) => {
  try {
    const data = updateTodoSchema.parse(req.body);

    const todo = await prisma.todo.update({
      where: { id: Number(req.params.id) },
      data
    });

    res.json(todo);
  } catch {
    res.status(400).json({ message: 'Update failed' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.todo.delete({
      where: { id: Number(req.params.id) }
    });

    res.json({ message: 'Deleted' });
  } catch {
    res.status(404).json({ message: 'Delete failed' });
  }
});

export default router;