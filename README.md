# bhelper

VibeHelpers — приложение на \$mol с ботом, подбором помощников и просмотром вакансий HH.ru.

## Быстрый старт (локально)
```bash
npm start bog/bhelper
# открой http://localhost:9080/bog/bhelper/app/-/test.html
```

## Docker
```bash
docker compose up --build
# приложение будет на http://localhost:9080/bog/bhelper/app/-/test.html
```

Dockerfile собирает project в `/mam/bog/bhelper` и запускает `npm exec mam /bog/bhelper`.

## Структура
- `app/` — главное приложение (\$mol).
- `app/prof/` — список помощников с ролями HH.ru (динамическая фильтрация, переход в бота).
- `app/vaka/` — поиск вакансий HH.ru.
- `app/crm/`, `app/settings/`, `app/lk/` — CRM, настройки, личная карточка.
- `assets/` — иконки/манифест.
- `Dockerfile`, `docker-compose.yml` — контейнеризация.

## Приложение
- Бот открывается со страниц помощников/вакансий, контекст подтягивается из выбранной роли.
- Тему можно переключать (светлая/тёмная), работает оффлайн-установка (\$mol offline).
