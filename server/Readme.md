### Graphql,l

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

