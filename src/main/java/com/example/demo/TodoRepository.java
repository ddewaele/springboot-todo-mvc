package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRepository extends CrudRepository<Todo, Long> {

    List<Todo> findByText(String text);

    List<Todo> findByCompletedTrue();

}