module.exports = (bot) => {
    process.on('unhandledRejection', (reason, p) => {
        console.log('[ANTI CRASH] : Unhandled Rejection/Catch');
        console.log(reason, p);
    });
    process.on("uncaughtException", (err, origin) => {
        console.log('[ANTI CRASH] : Uncaught Exception/Catch');
        console.log(err, origin);
    }); process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log('[ANTI CRASH] : Uncaught Exception/Catch (MONITOR)');
        console.log(err, origin);
    });
    process.on('multipleResolves', (type, promise, reason) => {
        console.log('[ANTI CRASH] : Multiple Resolves');
    });
}