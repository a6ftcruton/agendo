export default function() {

  this.urlPrefix = 'http://localhost:8080';
  this.namespace = '/api/v1';
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  // ---------- TODOS -----------
  //GET TODOS#index
  this.get('/todos', function(db) {
    console.log("HIT GET#index in mirage");
    console.log( "db ==>", db);

    return {
      data: db.todos.map(attrs => (
        { type: 'todos', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.post('/todos', function(db, request) {
    let attrs = JSON.parse(request.requestBody).todo;
    let record = db.todos.insert(attrs);
    return {
      data: {
        type: 'todos',
        // id: id,
        attributes: record
      }
    };
  });

  this.patch('/todos/:id', function(db, request) {
    let id = request.params.id;
    return {
      data: {
        type: 'todos',
        id: id,
        attributes: db.todos.find(id)
      }
    };
  });

  this.del('/todos/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'todos',
        id: id,
        attributes: db.todos.find(id)
      }
    };
  });


  // ---------- TAGS -----------
  //GET TAGS#index
  this.get('/tags', function(db) {

    return {
      data: db.tags.map(attrs => (
        { type: 'tags', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.post('/tags');
  this.del('/tags/:id');

  // this.get('/tags', function(){
  //   let tag = {id: 1, name: "chores"};

  //   return {
  //     tags: [tag]
  //   };
  // });
  //
  // this.post('/todos', function(db, request) {
  //   console.log("db = ", db);
  //   console.log("request = ", request);
  //   var attrs = JSON.parse(request.requestBody).todo;
  //   console.log("attrs = ", attrs);
  //   var todo = db.todos.insert(attrs);
  //   return todo;
  // });
}
