# Test cases:

# Assuming user uses postman.

1.  Test post request , launch post request with url{BaseUrl} append to it '/tasks', add headers
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_access_token>',
    },
    add payload: payload: {
    name: 'Test',
    date: -- add any date you want in the format of {yyyy-mm-dd}
    },

    now validate that status code is 201
    validate that the returned json has name field with value 'Test'
    validate that the returned json has date field of the date you entered.

2.  Test Get request, launch Get request with url {baseurl} append to it the suffix /tasks/123, add the headers -
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_access_token>',
    },

        validate status code = 200
        validate that the response json has the id=123
        validate that the response json has name=Test

3.  Test the Put Request, launch Put request with url {baseurl} append to it the suffix /tasks/123, dd the headers -
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_access_token>',
    },

        add payload: payload: {
        name: 'updatedTest',
        date: -- add any date you want in the format of {yyyy-mm-dd}
        },

        validate status code = 200
        validate that the returned json has name field with value 'updatedTest'
        validate that the returned json has date field of the date you entered.

4.  Bad Data Test - 400 Bad Request , Test the Post Request, launch Put request with url {baseurl} append to it the suffix /tasks/123, dd the headers -
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_access_token>',
    },

        add payload: payload: {

        },

        validate status code = 400

5.  Test - HTTP 404 Not Found , Test the Get request with url = 'https:///tasks---!',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_access_token>',
    },

    validate that the status code is 404

6.  Test - mock internal server error, in this case since internal error is an abgious server error . not something a user can invoke
    We'll use Mock. use automatiom or 'APIDOG'.
    now mock the basurl with Get request.
    response :
    with status: 500,
    and body : 'Internal Server Error'
