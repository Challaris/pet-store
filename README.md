# Pet Store API

Welcome to the Pet Store API! This API allows you to manage pets and their owners in a pet store.

## Getting Started

To use this API, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Challaris/pet-store

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start server:
   ```bash
   npm run dev
   ```

The API will be running at http://localhost:8000 by default.

## API Documentation

Explore the API using the Swagger documentation:

- Swagger UI: http://localhost:3000/api-docs

## Coming Soon: Owner APIs

- **Create a new owner**

  - **Endpoint:** `POST /owners`

- [ ] **Update owner details by ID**

  - **Endpoint:** `PUT /owners/:id`

  - **Request Body:**
    ```json
    {
      "name": "Updated John Doe",
      "phone": "+1 555-5678",
      "address": "123 Main Street"
    }
    ```

- [ ] **Get all owners**

  - **Endpoint:** `GET /owners`

- [ ] **Get an owner by ID**

  - **Endpoint:** `GET /owners/:id`

- [ ] **Delete an owner by ID**
  - **Endpoint:** `DELETE /owners/:id`

### Owner Model

- `name`: string (required)
- `email`: string (required)
- `address`: string (required)
- `phone`: string (required)
