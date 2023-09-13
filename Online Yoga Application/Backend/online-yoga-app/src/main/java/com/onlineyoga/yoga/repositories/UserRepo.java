package com.onlineyoga.yoga.repositories;



import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineyoga.yoga.entity.User;

public interface UserRepo extends JpaRepository<User, Integer>  {
	public User findByEmailAndPassword(String email,String password);
}
