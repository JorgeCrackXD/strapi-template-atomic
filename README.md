# 🚀 Getting started with this Strapi Template with global error handling and logger.
## How run the template.

### `npm install`
This template comes without node_modules installed. First thing you have to do after cloning the project is run the comand `npm install` to install all the necessary modules.

### `npm run develop`

To run the application run the next command. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `Default user`

The default user of the collection is:
-**Username**: jorge.cantu@atomic32.com
#
-**Password**: Atomic123*

With this user you can access to admin panel and create new admin user if you need.

## ⚙️ Error managment

This template contains a global error handler in the file `bootstrap.js` in API folder and that handler allows to remove all try catch from controllers and services and all the error are gonna be processed and catched by that file. 
```
try {
  await next();
} catch (error) {
  await createErrorObject(ctx, error);
  throw error;
}
```
If a custom error or specific error can be thrown, you still have to use a try catch block in the service you are working.
```
try{
  //All the logic
} catch ( error ) {
  throw new ValidationError("Lorem Ipsum");
}
```

## Error Structure
The error logged have the next properties:
- **ErrorCode**: Http code
- **Path**: The url of the endpoint
- **Method**: The method of the request (GET, POST, PUT, DEL)
- **userId**: The user that generates the error.
- **Body**: Body of the request
- **name**: The type of the error.
- **stack**: The stack trace of the error to know what is happening and where exactly the error ocurrs.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
