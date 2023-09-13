package com.onlineyoga.yoga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineyoga.yoga.entity.YogaTypes;

public interface YogaTypeRepo extends JpaRepository<YogaTypes, Integer> {

}
