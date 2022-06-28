package org.hadiali.Ezcut.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.hadiali.Ezcut.models.User;
import org.hadiali.Ezcut.services.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {
    @MockBean
    private UserService userService;
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void createUserTest() throws Exception {
        when(userService.createUser(ArgumentMatchers.any())).thenReturn(new User());
        User userModel = new User();
        userModel.setFirst_Name("test");
        userModel.setUser_Email("test@gmail.com");
        userModel.setUser_Password("abcdef");
        userModel.setLast_Name("test");
        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writeValueAsString(userModel);
        MockHttpServletRequestBuilder content = MockMvcRequestBuilders.post("/user/register_user").contentType(MediaType.APPLICATION_JSON).with(csrf()).content(s);
        ResultActions perform = mockMvc.perform(content);
        MvcResult mvcResult = perform.andReturn();
        MockHttpServletResponse response = mvcResult.getResponse();
        int status = response.getStatus();
        assertEquals(200,status);
    }
}
