import React from "react";
import "antd/dist/antd.css";
import {
  Form, Input, Button, Select,
} from "antd";
import locationInCameroon from "../../../data/locationsInCameroon";

const { Option } = Select;

const RegistrationForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function onChangeLocationSelect(value) {
    console.log(`selected ${value}`);
  }

  function onBlurLocationSelect() {
    console.log("blur");
  }

  function onFocusLocationSelect() {
    console.log("focus");
  }

  function onSearchLocationSelect(val) {
    console.log("search:", val);
  }

  const phonePrefixSelector = (
    <Form.Item
      name="phoneNumberCode"
      noStyle
      rules={[
        {
          required: true,
          message: "Please select a phone number code",
        },
      ]}
      hasFeedback
    >
      <Select
        style={{
          width: 100,
        }}
      >
        <Option value="+237">+237</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Full Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Full name can not be empty",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (value.includes(" ")) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Please enter at least two of your names"));
            },
          }),
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Phone number can not be empty",
          },
        ]}
        hasFeedback
      >
        <Input addonBefore={phonePrefixSelector} />
      </Form.Item>

      <Form.Item
        label="Location"
        name="location"
        rules={[
          {
            required: true,
            message: "Please select a phone number code",
          },
        ]}
        hasFeedback
      >
        <Select
          showSearch
          style={{ width: "100%" }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChangeLocationSelect}
          onFocus={onFocusLocationSelect}
          onBlur={onBlurLocationSelect}
          onSearch={onSearchLocationSelect}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          { locationInCameroon.map((location) => <Option key={location} value={location}>{location}</Option>) }

        </Select>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (value.length >= 8) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Password can not be less than 8 digits"));
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Password Confirmation"
        name="passwordConfirmation"
        rules={[
          {
            required: true,
            message: "Please input your password confirmation",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("The two passwords that you entered do not match!"));
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
