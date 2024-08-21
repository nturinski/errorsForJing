import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function httpThrowError(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    throw new Error('This function will always fail.');
};

app.http('httpThrowError', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpThrowError
});
