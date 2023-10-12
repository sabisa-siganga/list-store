# API Testing with Postman

This README provides step-by-step instructions for testing an API using Postman, a popular API testing tool.

## Prerequisites

Before you begin, make sure you have the following installed and set up:

1. [Postman](https://www.postman.com/downloads/)

## Getting Started

1. **Download and Install Postman**: If you haven't already, download and install Postman from the [official website](https://www.postman.com/downloads/).

2. **Open Postman**: Launch Postman on your system.

## Testing the API

Follow these steps to test the API using Postman:

1. **Create a New Collection**:

   - Click on the "Collections" tab in the left sidebar.
   - Click "New Collection" to create a new collection.
   - Give your collection a name, e.g., "API Test Collection."

2. **Create a Request**:

   - Inside your collection, click "Add Request."
   - Give your request a name, e.g., "GET Request."

3. **Set Request Method and URL**:

   - Choose the HTTP request method (GET, POST, PUT, DELETE, etc.).
   - Enter the API endpoint URL in the request URL field, e.g., `https://api.example.com/v1/resource`.

4. **Headers**:

   - If the API requires custom headers, go to the "Headers" section and add them as key-value pairs (e.g., "Authorization" as the key and your API token as the value).

5. **Parameters**:

   - If your API requires query parameters, go to the "Params" section and add them as key-value pairs.

6. **Body (if applicable)**:

   - If you need to send data in the request body (e.g., for POST or PUT requests), go to the "Body" section and select the data format (e.g., JSON, form-data) and provide the data.

7. **Send the Request**:

   - Click the "Send" button to send the request.
   - Postman will display the response, including the status code, headers, and response body.

8. **End points**:

- **Post** : http://localhost:3000/api
- **Get** : http://localhost:3000/api
- **Delete** : http://localhost:3000//api/:id
- **Put** : http://localhost:3000/api/:id
