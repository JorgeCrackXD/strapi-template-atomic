module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/download/:key',
     handler: 'download.download',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
