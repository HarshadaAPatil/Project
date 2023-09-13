package com.onlineyoga.yoga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineyoga.yoga.entity.Membership;

public interface MembershipRepo extends JpaRepository<Membership, Integer> {

	public Membership findByUserId(int userId);
}
