import { test, expect } from '@playwright/test';
import { Utils } from '../utils/Utils';
import { Fixtures } from '../fixtures/fixtures';   

// use utils class to create current-date as string
const utils = new Utils();
const formattedDate = utils.buildDate();

// use fixtures interface to create API headers and payload
const fixtures: Fixtures = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <your_access_token>',
    },
    payload: {
        name: 'Test',
        date: formattedDate
    },
};

// special payload object for PUT request test
const updatedPayload  = {
    name: 'updatedTest',
    date: formattedDate 
};



// Test the Post endpoint
// Assuming task id is auto generated in a database....
test("Test Post Request ", async ({ request }) => {
    const res =  await request.post(`/tasks` , {
        headers: fixtures.headers,  
        data: {
          name: fixtures.payload
        }
      });
    
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body).toEqual({name: 'Test'});
    expect(body).toEqual({date: fixtures.payload.date});
});


// Test the Get endpoint
test("Test the Get endpoint", async ({ request }) => {
    const res = await request.get(`/tasks/123`, {
        headers: fixtures.headers  
    });

    const body = await res.json();
    expect(res.status()).toBe(200);
    expect(body).toEqual({id: '123'});
    expect(body).toEqual({name: 'Test'});
});


// Test the Put Request
test("Test the Put endpoint", async ({ request }) => {
    const res =  await request.put(`/tasks/123` , {
        headers: fixtures.headers,  
        data: {
          name: updatedPayload
        }
      });

    const body = await res.json();
    expect(res.status()).toBe(200);
    expect(body).toEqual({id: '123'})
    expect(body).toEqual({name: 'updatedTest'}); //  validate that resource with id:123 name field will correctly updated.. 
});


/*
 Now we'll add some negative tests with error messages
*/ 


// Bad Data Test -  400 Bad Request 
test("Test Post Request with no payload ", async ({ request }) => {
    const res =  await request.post(`/tasks` , {
        headers: fixtures.headers,  
        data: {
         
        }
      });
    
    expect(res.status()).toBe(400);
});


// Test - HTTP 404 Not Found
test("Test Get Request with wrong url ", async ({ request }) => {
    const res =  await request.get(`/tasks---!` , {
        headers: fixtures.headers
      });
    
    expect(res.status()).toBe(404);
});


// Test - mock internal server error
test("Test Api with status code 500", async({ page }) => {
    await page.route('/', route => {
        route.fulfill({
            status: 500,
            contentType: fixtures.headers['Content-Type'],
            body: JSON.stringify({ error: 'Internal Server Error' }),
          });
    })
})







