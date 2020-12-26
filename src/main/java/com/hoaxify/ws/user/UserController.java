package com.hoaxify.ws.user;

import javax.validation.Valid;

import com.hoaxify.ws.shared.CurrentUser;
import com.hoaxify.ws.user.vm.UserVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import com.hoaxify.ws.shared.GenericResponse;

@RestController
public class UserController {

    @Autowired
    UserService userService;



    @PostMapping("/api/1.0/users")
    public GenericResponse createUser(@Valid @RequestBody User user) {
        userService.save(user);
        return new GenericResponse("user created");
    }

    @GetMapping("/api/1.0/users")
    Page<UserVM> getUsers(Pageable page, @CurrentUser User user) {
        return userService.getUsers(page, user).map(UserVM::new);
    }

}