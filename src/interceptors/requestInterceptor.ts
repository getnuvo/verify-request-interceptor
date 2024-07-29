// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(
    "https://api-gateway.getnuvo.com/user-platforms/v3/license-keys/verify*",
    () => {
      console.log("mocked");
      // ...and respond to them using this JSON response.
      return HttpResponse.json({
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        firstName: "John",
        lastName: "Maverick",
      });
    }
  ),
];

export const worker = setupWorker(...handlers);
