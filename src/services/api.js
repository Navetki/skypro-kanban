const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

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

export async function signUp({ login, name, password }) {
  const response = await fetch(userHost, {
    method: "POST",

    body: JSON.stringify({ login, name, password }),
  });

  if (response.status === 400) {
    const errorData = await response.json();
    throw new Error(
      errorData.error || "Пользователь с таким логином уже существует",
    );
  }

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  return await response.json();
}
