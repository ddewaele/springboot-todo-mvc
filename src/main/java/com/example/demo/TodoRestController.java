package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.websocket.server.PathParam;

@RestController
@Transactional
public class TodoRestController {

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping(value = "/api/todos")
    public Iterable<Todo> getTodos() {
        return todoRepository.findAll();
    }

    @PostMapping(value="/api/todos")
    public void addTodo(@RequestBody Todo todo) {
        todoRepository.save(todo);
    }

    @DeleteMapping(value="/api/todos/{id}")
    public void deleteTodo(@PathVariable("id") Long id) {
        todoRepository.delete(id);
    }

    @PutMapping(value="/api/todos/{id}")
    public void editTodo(@PathVariable("id") Long id,@RequestBody Todo todo) {
        todoRepository.findOne(id).setText(todo.getText());
    }

    @PutMapping(value="/api/todos/toggle/{id}")
    public void toggleTodo(@PathVariable("id") Long id) {
        todoRepository.findOne(id).toggle();
    }

    @PostMapping(value="/api/todos/clearCompleted")
    public void clearCompleted() {
        todoRepository.findByCompletedTrue().stream().forEach(todo -> todoRepository.delete(todo));
    }

}
