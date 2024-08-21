# a few failures

- deploy to a function app in azure
- hit the http triggers
- wait a few minutes
- Run the following queries to see various errors

> traces
> | where severityLevel > 1

> exceptions

## storageBlobTrigger1

This function is designed to fail because the connection string app setting is not defined. All other functions should still work even if this doesn't.

> Microsoft.Azure.WebJobs.Host: Error indexing method 'Functions.storageBlobTrigger1'. Microsoft.Azure.WebJobs.Extensions.Storage.Blobs: Storage account connection string 'AzureWebJobsMissingAppSetting' does not exist. Make sure that it is a defined App Setting.
> Error indexing method 'Functions.storageBlobTrigger1'
> Function 'Functions.storageBlobTrigger1' failed indexing and will be disabled.

## hello

This will log a warning if the user didn't pass 'name' in the query.

> Name was missing.

## httpThrowError

This function will always fail

> Executed 'Functions.httpThrowError' (Failed, Id=ce620b4f-7f67-44c0-85a6-d2a0592aca76, Duration=24ms)
> System.Private.CoreLib: Exception while executing function: Functions.httpThrowError. System.Private.CoreLib: Result: Failure
> Exception: This function will always fail.
> Stack: Error: This function will always fail.
> at /Users/erijiz/TestRepos/errorsForJing/dist/src/functions/httpThrowError.js:16:15
> at Generator.next (<anonymous>)
> at /Users/erijiz/TestRepos/errorsForJing/dist/src/functions/httpThrowError.js:8:71
> at new Promise (<anonymous>)
> at __awaiter (/Users/erijiz/TestRepos/errorsForJing/dist/src/functions/httpThrowError.js:4:12)
> at httpThrowError (/Users/erijiz/TestRepos/errorsForJing/dist/src/functions/httpThrowError.js:15:12)
> at InvocationModel.<anonymous> (/Users/erijiz/TestRepos/errorsForJing/node_modules/@azure/functions/dist/azure-functions.js:215:46)
> at Generator.next (<anonymous>)
> at /Users/erijiz/TestRepos/errorsForJing/node_modules/@azure/functions/dist/azure-functions.js:121:71
> at new Promise (<anonymous>).

## httpLogError

This function will succeed for the user, but still log an error to app insights.

> This function will log an error.
