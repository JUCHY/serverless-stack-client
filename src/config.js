const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1r7tniak83eff"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://92j1o3llh8.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_AMgVWhmlt",
    APP_CLIENT_ID: "5u4q1bd8i7pkce5dutidrf8qkf",
    IDENTITY_POOL_ID: "us-east-1:888e23b5-d19b-4756-ada6-99e68bbc9e6b"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-mwqyyx3ss3ue"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://nn6kqce40m.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_X1jis9WVR",
    APP_CLIENT_ID: "6b15ujef5ive73nv1jn7n5reqq",
    IDENTITY_POOL_ID: "us-east-1:03d912ab-deff-4a73-afcb-510e70a77bc7"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
