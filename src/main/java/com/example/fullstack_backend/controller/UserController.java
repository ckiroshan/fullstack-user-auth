package com.example.fullstack_backend.controller;

import com.example.fullstack_backend.model.User;
import com.example.fullstack_backend.repository.UserRepository;
import com.example.fullstack_backend.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Indicate this class is a REST controller
@CrossOrigin("http://localhost:5173") // Enable CORS for requests coming from given endpoint
public class UserController {

    @Autowired // Autowire UserRepository to enable dependency injection
    private UserRepository userRepository; // userRepository object

    // Create User
    @PostMapping("/users") // Maps HTTP POST requests to this method
    User newUser(@RequestBody User newUser) {
        // Saves new user to the DB & returns saved entity
        return userRepository.save(newUser);
    }

    // Get all Users
    @GetMapping("/users") // Maps HTTP GET requests to this method
    List<User> getAllUsers() {
        // Retrieve all users from the database
        return userRepository.findAll();
    }

    // Get user by ID
    @GetMapping("/users/{id}")
    User getUserById(@PathVariable Long id) {
        // If a user with the given ID is found, it is returned.
        return userRepository.findById(id)
                // If no user is found, a 'UserNotFoundException' is thrown.
                .orElseThrow(() -> new UserNotFoundException(id));
    }


}
