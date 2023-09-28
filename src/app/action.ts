'use server';

import { createTodo, deleteTodo, updateTodo } from '@/lib/todos_db';
import { revalidatePath } from 'next/cache';

export async function createTodoAction({ title }: { title: string }) {
  await createTodo(title);
  revalidatePath('/');
}

export async function updateTodoAction(
  id: string,
  update: { tilte?: string; completed?: boolean }
) {
  await updateTodo(id, update);
  revalidatePath('/');
}

export async function deleteTodoAction({ id }: { id: string }) {
  await deleteTodo(id);
  revalidatePath('/');
}
