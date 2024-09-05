const { app } = require('@azure/functions');

app.http('httpTrigger2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        try {
            let name = request.query.get('name') || request.text() || 'world';
            return { body: `Hello, ${JSON.parse(name)}!` };
        } catch (e) {
            context.error(e);
            return { status: 500, body: e };
        }
    }
});
