package com.example.fullstack_backend.exception;

// This is the custom exception class for handling "User Not Found" scenarios
public class UserNotFoundException extends RuntimeException {

  // Constructor for UserNotFoundException class
  public UserNotFoundException(Long id) {
    // Call the constructor of the superclass (RuntimeException)
    // It passes a custom error message that includes the user ID
    super("User not found with ID: " + id);
  }
}
