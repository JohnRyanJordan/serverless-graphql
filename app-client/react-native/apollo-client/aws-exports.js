const awsmobile =  {
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:xxxxxxx',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_xxxxx',
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: 'xxxxxxxxxxxx',
  },
  Analytics: {
    // OPTIONAL - disable Analytics if true
    disabled: false,
    // OPTIONAL - Allow recording session events. Default is true.
    autoSessionRecord: true,
    AWSPinpoint: {
      // OPTIONAL -  Amazon Pinpoint App Client ID
      appId: 'xxxxxxx',
      // OPTIONAL -  Amazon service region
      region: 'us-east-1',
      // // OPTIONAL -  Customized endpoint
      // endpointId: 'XXXXXXXXXXXX',
      // // OPTIONAL - client context
      // clientContext: {
      //   clientId: 'xxxxx',
      //   appTitle: 'xxxxx',
      //   appVersionName: 'xxxxx',
      //   appVersionCode: 'xxxxx',
      //   appPackageName: 'xxxxx',
      //   platform: 'xxxxx',
      //   platformVersion: 'xxxxx',
      //   model: 'xxxxx',
      //   make: 'xxxxx',
      //   locale: 'xxxxx'
      // },
      //
      // // Buffer settings used for reporting analytics events.
      // // OPTIONAL - The buffer size for events in number of items.
      // bufferSize: 1000,
      //
      // // OPTIONAL - The interval in milliseconds to perform a buffer check and flush if necessary.
      // flushInterval: 5000, // 5s
      //
      // // OPTIONAL - The number of events to be deleted from the buffer when flushed.
      // flushSize: 100,
      //
      // // OPTIONAL - The limit for failed recording retries.
      // resendLimit: 5
    }
  },
  API: {
  graphql_endpoint: 'https://xxxxxxxx.execute-api.us-east-1.amazonaws.com/graphql',
  graphql_endpoint_iam_region: 'us-east-1'
},
  Storage: {
    bucket: 'xxxxxxx', //REQUIRED -  Amazon S3 bucket
    region: 'us-east-1', //OPTIONAL -  Amazon service region
  },
};


export default awsmobile;
