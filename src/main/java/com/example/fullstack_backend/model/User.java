package com.example.fullstack_backend.model;

import javax.persistence.*;

@Entity // Specifies this class is an entity & is mapped to a database table.
public class User {
    // Instance variables
    @Id // Specifies primary key of User entity.
    @GeneratedValue// Auto generates primary key values.
    private Long id;
    private String username;
    private String name;
    private String email;

    // Getters & Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
