import React, { useState } from "react";
import {
  Form, Input, Button, Radio,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function RegistrationForm() {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
    >
      <Form.Item label="Field A" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Field B"
        tooltip={{
          title: "Tooltip with customize icon",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
}

export default RegistrationForm;
