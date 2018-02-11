package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class TodoRestController {

    @GetMapping(value = "/api/todos")
    public List<Todo> getTodos() {
        return Arrays.asList(
                new Todo("todo1"),
                new Todo("todo2"),
                new Todo("todo3"),
                new Todo("todo4")
        );
    }
}
