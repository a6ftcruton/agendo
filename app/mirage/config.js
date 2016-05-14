export default function() {

  this.urlPrefix = 'http://localhost:8080';
  this.namespace = '/api/v1';
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  // ---------- TODOS -----------
  //GET TODOS#index
  this.get('/todos', function(db) {

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
        attributes: record
      }
    };
  });

  this.patch('/todos/:id', function(db, request) {
    let id = request.params.id;
    let requestBody = JSON.parse(request.requestBody);
    return {
      data: {
        type: 'todos',
        id: id,
        attributes: requestBody.data.attributes
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

  this.post('/tags', function(db, request) {
    let attrs = JSON.parse(request.requestBody).tag;
    let record = db.tags.insert(attrs);
    return {
      data: {
        type: 'tags',
        attributes: record
      }
    };
  });

  this.del('/tags/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'tags',
        id: id,
        attributes: db.tags.find(id)
      }
    };
  });

}
