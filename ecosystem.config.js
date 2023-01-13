module.exports = {
    apps: [
        {
            name: 'bc-stone.ru',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p 8000',
            cwd: "./bc-stone.ru",
            instances: 1,
            watch: false,
        },
        {
            name: 'bc-stone.ru',
            script: 'node_modules/next/dist/bin/next',
            args: 'start -p 8001',
            cwd: "./new.bc-stone.ru",
            instances: 1,
            watch: false,
        },
    ]
};
