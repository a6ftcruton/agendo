export default function() {

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  // this.get('/todos', function() {
  //   return { 
  //     todos: [
  //       {id: 1, title: 'First todo'},
  //       {id: 2, title: 'Second todo'},
  //       {id: 3, title: 'Third todo'},
  //     ]
  //   };
  // });

  // this.get('/todos', function(db){
  //   return {
  //     todos: db.todos
  //   };
  // });

  this.get('/todos');
  this.post('/todos');
  this.put('/todos/:id');
  this.del('/todos/:id');
  // this.post('/todos', function(db, request) {
  //   console.log("db = ", db);
  //   console.log("request = ", request);
  //   var attrs = JSON.parse(request.requestBody).todo;
  //   console.log("attrs = ", attrs);
  //   var todo = db.todos.insert(attrs);
  //   return todo;
  // });
}
