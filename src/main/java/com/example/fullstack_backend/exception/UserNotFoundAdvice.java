package com.example.fullstack_backend.exception;

// Import necessary classes
import java.util.HashMap; // HashMap class for storing error messages
import java.util.Map; // Map interface for type safety

import org.springframework.http.HttpStatus; // HttpStatus enumeration for setting response status
import org.springframework.web.bind.annotation.ControllerAdvice; // Global exception handling
import org.springframework.web.bind.annotation.ExceptionHandler; // Handling specific exceptions
import org.springframework.web.bind.annotation.ResponseBody; // Returning response body as JSON
import org.springframework.web.bind.annotation.ResponseStatus; // Setting HTTP status code

@ControllerAdvice // ControllerAdvice to handle exceptions globally
public class UserNotFoundAdvice {

    @ResponseBody // Indicate that the return value should be written directly to the HTTP response body
    @ExceptionHandler(UserNotFoundException.class) // Handle UserNotFoundException
    @ResponseStatus(HttpStatus.NOT_FOUND) // Set the HTTP status code to 404 (Not Found)
    public Map<String, String> exceptionHandler(UserNotFoundException exception) {
        // Create a new HashMap to store the error message
        Map<String, String> errorMap = new HashMap<>();
        // Add the error message from the exception to the map
        errorMap.put("Error message", exception.getMessage());

        // Return the map as the response body
        return errorMap;
    }
}
