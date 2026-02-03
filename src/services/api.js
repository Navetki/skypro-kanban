const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

//  список задач
export async function getTasks({ token }) {
  const response = await fetch(baseHost, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка при получении задач");
  }

  const data = await response.json();
  return data;
}

// добавление задачи
export async function postTask({ token, taskData }) {
  const response = await fetch(baseHost, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });

  if (response.status === 400) {
    throw new Error("Неверные данные задачи");
  }

  if (!response.ok) {
    throw new Error("Ошибка при добавлении задачи");
  }

  const data = await response.json();
  return data;
}
// изменение
export async function putTask({ token, taskData, id }) {
  const response = await fetch(`${baseHost}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    throw new Error("Ошибка при редактировании задачи");
  }

  const data = await response.json();
  return data;
}

//  удалениt задачи
export async function deleteTask({ token, id }) {
  const response = await fetch(`${baseHost}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка при удалении задачи");
  }

  const data = await response.json();
  return data;
}
//вход
export async function signIn({ login, password }) {
  const response = await fetch(`${userHost}/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });

  if (response.status === 400) {
    throw new Error("Неверный логин или пароль");
  } else if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  return await response.json();
}

// Регистрация
export async function signUp({ login, name, password }) {
  const response = await fetch(userHost, {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  });

  if (response.status === 404) {
    throw new Error("Сервер не нашел путь для регистрации. Проверьте URL.");
  }
  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже существует");
  } else if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  return await response.json();
}
