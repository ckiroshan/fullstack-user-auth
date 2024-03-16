package com.example.fullstack_backend.repository;

import com.example.fullstack_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // JpaRepository provides built-in CRUD operations for User entity.
    // Takes 2 parameters: Entity type (User) & (Long) datatype of its primary key .
}
