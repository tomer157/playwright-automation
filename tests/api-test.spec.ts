import { test, expect } from "@playwright/test";

const expectedHeaders = {
    'accept-language': 'en-US1',
};

// Test the segment endpoint
test("Test Post Segment Api Call ", async ({ request }) => {
    const res = await request.post('https://api.segment.artlist.io/v1/t');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ success: true });
  });


// Intercept the same request and change its request-headers  
test('mock response with playwright', async ({ page, request }) => {
    // Delete header
    await page.route('https://api.segment.artlist.io/v1/t', route => {
        const headers = route.request().headers();
        delete headers['Sec-Ch-Ua'];
        headers['accept-language'] = 'en-US1';
        console.log('Modified headers:', headers);

        // Continue requests as POST.
        route.continue({ method: 'POST', headers });
        // Assert the modified headers
        expect(headers).toMatchObject(expectedHeaders);
    });
    
    
    
     
});       
