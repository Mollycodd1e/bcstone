Файлы проекта

Prod: /usr/share/sites/bc-stone.ru

Dev: /usr/share/sites/new.bc-stone.ru

Устанвока npm:
npm install

Запуск для разработки:
npm run dev

Сборка проекта:
Prod: npm run build

Порты:

8000 prod bc-stone.ru

8001 dev new.bc-stone.ru

список процессов менеджера pm2:
pm2 list

pm2 restart|stop|start|delete (bc-stone.ru|new.bc-stone.ru)

Конфигурация зпуска pm2 /usr/share/sites/ecosystem.config.js

Запуск pm2 из пупки /usr/share/sites/ecosystem.config.js
Команда pm2 start
