const usersController = require('../controllers').users;
const imagesController = require('../controllers').images;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/users', usersController.create);
  // app.get('/api/todos', todosController.list);
  // app.get('/api/todos/:todoId', todosController.retrieve);
  // app.put('/api/todos/:todoId', todosController.update);
  // app.delete('/api/todos/:todoId', todosController.destroy);

  app.post('/api/images', imagesController.create);
  // app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  // app.delete(
  //   '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  // );
  app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
};
