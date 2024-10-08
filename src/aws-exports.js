const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:e100d69e-c39a-4f3f-b999-6dcf79a22c9a",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_15wavOp4q",
    "aws_user_pools_web_client_id": "mgl8qol9j8n0dn8qrbi6nvcsk",
    "oauth": {
        "domain": "login.notely.cloud", // Custom domain for the Cognito Hosted UI
        "scope": ["email", "openid", "profile"],
        "redirectSignIn": "https://notely.cloud/app", // Redirect to /app after sign-in
        "redirectSignOut": "https://notely.cloud/", // Redirect to home page after sign-out
        "responseType": "code" // Authorization code grant
    },
    "aws_cognito_username_attributes": ["EMAIL"],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": ["EMAIL"],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": ["EMAIL"]
};

export default awsmobile;
