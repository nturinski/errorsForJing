import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function httpLogError(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.error('This function will log an error.');
    return { body: 'Partial success' }
};

app.http('httpLogError', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpLogError
});
