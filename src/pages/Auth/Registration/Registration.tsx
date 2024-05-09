import { Button, Form, Input, message } from "antd";
import "./Registration.css";
import { useState } from "react";
import { registration } from "../utils/fetch";
import ProForm, { ProFormText } from "@ant-design/pro-form";

const style = {
  width: "494px",
  height: "40px",
  marginLeft: "35px",
  marginTop: "12px",
  border: "1px solid rgba(0, 0, 0, 0.5)",
};

const RegistrationPage = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordToken, setPasswordToken] = useState("");
  const [data, setData] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    password_confirmation?: string;
  }>({});

  const onSubmit = async (values: any) => {
    setIsLoading(true);

    registration(values);
  };
  return (
    <div className="main-Auth">
      <p className="large-txt">
        The largest community <br /> of photo enthusiasts
      </p>
      <div className="fieldCont">
        <div className="fields">
          <p>Sign up for a free account</p>
          <ProForm
            name="registration_form"
            submitter={{
              render: () => {
                return <></>;
              },
            }}
            onFinish={onSubmit}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your first name' }]}
            >
              <Input placeholder="First name" />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your last name' }]}
            >
              <Input placeholder="Last name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input placeholder="Email address" />
            </Form.Item>
            <Form.Item
              name="phone"
              
            >
              <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item
              name="password"
              
            >
              <Input.Password placeholder="Create password" />
            </Form.Item>
            <Form.Item
              name="password_confirmation"
              rules={[
                { required: true, message: 'Please confirm your password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords do not match');
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm password" />
            </Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                style={{ width: "130px" }}
              >
                Next
              </Button>
          </ProForm>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
