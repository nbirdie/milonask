[![Milonask promocodes project workflow](https://github.com/nbirdie/delivery_promo/actions/workflows/main.yaml/badge.svg)](https://github.com/nbirdie/delivery_promo/actions/workflows/main.yaml)

# Milonask

## Содержание
1. [Описание](#description)
2. [Запуск проекта](#launch)
3. [Доступ в админку](#admin)
4. [Ссылки на промокоды](#promocodes-links)

## <a name='description'>Описание</a>


## <a name='launch'>Запуск проекта</a>
Чтобы развернуть проект необходимо выполнить следующие действия (у Вас уже должен быть установлен Docker):

* для запуска выполните команды:
  * `cd infra`
  * `sh ./infra/bin/scripts.sh setup_app` - prod режим
  * `sh ./infra/bin/scripts.sh setup_app_local` - dev режим
* для доступа в админку создайте суперпользователя:
  * `sh ./infra/bin/scripts.sh create_admin`
* чтобы загруить тестовые данные в БД выполните команду:
  * `sh ./infra/bin/scripts.sh load_data`
* чтобы получить больше информации об использовании CLI выполните команду:
  * `sh ./infra/bin/scripts.sh help`

При локальной разработке проект доступен по адресу http://localhost/.
Готовый проект можно найти на сайте http://89.108.99.250/.

## <a name='admin'>Доступ в админку</a>
Для доступа в админку уже есть тестовый администратор:

* Логин: test_user
* Пароль: 123456789_test

Чтобы войти, перейдите по ссылке http://89.108.99.250/admin/.

## <a name='promocodes-links'>Ссылки на промокоды</a>

