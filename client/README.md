* Invoke a POST or GET http method
* We'll use POST to get and retrieve data.

* Specify content of request as application/json
* GraphQL Documents passed as JSON

* Reference URL of GraphQL endpoint

* Using Apollo boost, react-apollo and graphql.
* Apollo cli

Apollo CLI brings together your GraphQL clients and servers with tools for validating your schema, linting your operations for compatibility with your server and generatin static types for improved client-side type safety.

### Design.

Ant Design.

### Routing

Two main ways to achieve routing.

* Server side routing.
Will only request the web page that the user is viewing , not the entire web app.Initial page load will be faster. Improved SEO

* Client side routing

Every URL change will result in a full page refresh
Data that doesn't change might be requested repeatedly.

### Routes to be displayed

1. /- Homepage
2. /host- Host a listing
3. /listing/:id - display a listing
4. /listings/:location? - display all listings
5. /user/:id - display a user
6. /login - login
7. /stripe- stripe authentication