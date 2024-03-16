package com.example.fullstack_backend.controller;

import com.example.fullstack_backend.model.User;
import com.example.fullstack_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Indicate this class is a REST controller
public class UserController {

    @Autowired // Autowire UserRepository to enable dependency injection
    private UserRepository userRepository; // userRepository object

    // Create User
    @PostMapping("/users") // Maps HTTP POST requests to this method
    User newUser(@RequestBody User newUser) {
        // Saves new user to the DB & returns saved entity
        return userRepository.save(newUser);
    }
}
