// src/api.js
const BASE = process.env.REACT_APP_API_BASE;

export async function fetchTodos() {
  const response = await fetch(`${BASE}/todos`);
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return response.json();
}

export async function createTodos(todo) {
    const response = await fetch(`${BASE}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({todo}),
    });
    if (!response.ok) {
        throw new Error('Failed to create todo');
    }
}

export async function updateTodos(id, updates) {
    const response = await fetch('${BASE}/todos/${id}', {
        method: 'PUT',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({updates}),
    });
    if (!response.ok) {
        throw new Error('Failed to update todo');
    }
}

export async function deleteTodos(id) {
      const res = await fetch(`${BASE}/todos/${id}`, { method: 'DELETE' });
  return await res.json();
}