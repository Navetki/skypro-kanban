# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Skypro Kanban App

Интерактивное приложение для управления задачами в формате Канбан-доски, созданное на React с использованием Vite.

## Функционал

- Авторизация: Полноценный цикл регистрации и входа в систему.
- Управление карточками: Создание новых задач, редактирование текущих и удаление.
- Смена статусов: Возможность перемещать задачи между колонками (Без статуса, В работе, Готово и т.д.).
- Календарь: Интеграция `react-calendar` для выбора сроков исполнения задач.
- Валидация: Проверка форм на пустые поля и корректность данных.

Дополнительно

- Темная тема: Реализована.
- Уведомления: Всплывающие сообщения реализована.
- Защищенные роуты.
- UX-улучшения: Блокировка кнопок во время запросов и обработка пустой доски ("Новых задач нет").

## Инструкция по запуску

Для работы приложения на вашем компьютере должен быть установлен **Node.js**.

### 1. Установка библиотек

Сначала необходимо установить все зависимости проекта:

1. npm install
2. npm run dev — запуск проекта в режиме разработки.

Название: Skypro-Kanban.
Функционал: Просмотр, создание, удаление и редактирование задач.
Стек: React, Styled Components, React Router, React Calendar, React-Toastify.
Доп. фичи:
Смена темы (Light/Dark).
Уведомления через Toastify.
