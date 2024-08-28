const { app } = require('@azure/functions');

app.http('httpTrigger3', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        try {
            const dateFormat = import('dateformat');
            return { body: `The time is now ${dateFormat.default()}` };
        } catch (e) {
            context.error(e);
            return { status: 500, body: e };
        }
    }
});
