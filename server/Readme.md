### Graphql

GraphQl is a query language for APIs.

An example for this syntax looks like this.

```
query{
repository(owner:"ocotocat",name:"hello world"){
description
}
}
```

A GraphQL Schema describes the GraphQL API. We have two large pieces of GraphQL API are:

1. The schema
2. The schema resolvers

There are two Object types in GraphQL.

1. Query
2. Mutation

Arguments & Input Types

```
input CreateListingInput{
    id:ID!
    title:String!
    address:String!
    price:Int!
}

type Mutation{
    createListing(input:CreateListingInput!):Listing!
}
```

Resolvers are functions that resolve and generate a response for a field.

The arguments for a resolver are.

1. obj- object returned from the parent resolver
2. args- arguments provided to the field.
3. context- value provided to every resolver
4. info- info about the execution state of the query.

In Node, process contains information about the current running process and env is a object within process which represents the state of the node environment.

### API driven development

The graphql api is going to expose business logic and data.
The server is a node express server which serves a graphql api and stores data in MongoDB.

### Complex parts

Handling booking dates is tricky. The app uses key value pairs to handle
booking by dates, month and day.

An example of how this looks like:

```javascript
// 2019-01-01  year:2019 | month:01 | day:01
```

```javascript
const bookingIndex = {
  "2019": {
    "00": {
      "01": true,
      "02": true
    },
    "04": {
      "31": true
    },
    "05": {
      "01": true
    },
    "06": {
      "20": true
    }
  }
};
```

**_Note_**: The Js function for getting the month returns 0 .... and 11 for Dec.

### OAuth roles:

1. Resource Owner
2. App
3. Authorization and Resource Server

The first step in the Google OAuth flow requires us to redirect our
user to Google so that they can authorize our app and sign in.
We'll need to generate a url that will navigate the user to the consent form.

We'll construct this url in the server and have our client app retrieve the url through a query field.

This query field is the auth url field. Once Google sign in authenticates the user and redirects them the client login screen,
We'll want to have the react app pass the code the node server.

THe node server will then make a request to google services with the code to retrieve the access token. The login mutation will be fired by the react app with the code to make the request to the google service to retrieve the token and further info.

### Generating an Authentication url

***Documentation***: http://github.com/googleapis/google-api-nodejs-client#oauth2-client


