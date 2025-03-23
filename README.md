# my-Tasks-web

This is the frontend module of the `my-Tasks` project, a small _to-do_ App for creating and tracking tasks and managing their status (_To Do_, _In Progress_, _Completed_).

The `my-Tasks` project hast two modules (repositories:

- `my-Tasks-web` (**this module/ repository**): the frontend project, a so called _Single Page App (SPA)_ build with [Vite and the _react-ts_ template](https://vite.dev/guide/#scaffolding-your-first-vite-project), to be deployed to [Amazong S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).
- [`my-Tasks-api`](https://github.com/pawsaw/my-tasks-api): the _RESTful api_, providing an endpoint for managing tasks (CRUD operations). This module is to be deployed to [AWS Lambda](https://aws.amazon.com/lambda/) with [Amazon API Gateway](https://aws.amazon.com/api-gateway/) in a proxy configuration. The data is stored and managed in [Amazon DynamoDB](https://aws.amazon.com/dynamodb/).

A live demo version is deployed to: http://my-tickets-web-bucket.s3-website-us-east-1.amazonaws.com/tasks

## Configuration

### local development

1. Clone the project and install its dependencies:

```sh
git clone https://github.com/pawsaw/my-tasks-web.git
cd my-tasks-web
npm install
```

2. Configure the base url of the `my-Tasks-api` project. You might want to store this value in your local `.env` file:

```yml
VITE_API_BASE_URL=https://5rr3o0vvq1.execute-api.us-east-1.amazonaws.com
```

3. Develop in Vites incremental watch mode:

```sh
npm run dev
```

## Deployment to _Amazon S3_

### Sign in to AWS

Sign in through the _AWS Command Line Interface_, as described [here](https://docs.aws.amazon.com/signin/latest/userguide/command-line-sign-in.html).

Hint:
Go to `IAM` in [AWS Console](https://eu-north-1.signin.aws.amazon.com/) to create access keys and than type into the terminal:
```sh
% aws configure    
AWS Access Key ID [****************QWIX]: 
AWS Secret Access Key [****************yrcD]: 
Default region name [eu-north-1]: 
Default output format [None]: 
````

### Build the distribution

```sh
npm run build
```

### Deploy to _Amazon S3_

```sh
npm run aws:deploy
```

A session typicaly looks like this:
```sh
% npm run aws:deploy

> my-tasks-web@0.0.0 aws:deploy
> serverless client deploy


This deployment will:
- Upload all files from 'dist' to bucket 'my-tickets-web-bucket'
- Set (and overwrite) bucket 'my-tickets-web-bucket' configuration
- Set (and overwrite) bucket 'my-tickets-web-bucket' bucket policy
- Set (and overwrite) bucket 'my-tickets-web-bucket' CORS policy
? Do you want to proceed? Yes
Looking for bucket...
Bucket found...
Deleting all objects from bucket...
Configuring bucket...
Configuring policy for bucket...
Retaining existing tags...
Configuring CORS for bucket...
Uploading client files to bucket...
Success! Your site should be available at http://my-tickets-web-bucket.s3-website-us-east-1.amazonaws.com/
```

At this point: 🚀 Hurra! We're online. 🎉 🥳