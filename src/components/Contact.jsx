/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PushPinIcon from "@mui/icons-material/PushPin";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Form, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const { TextArea } = Input;

// npm i @emailjs/browser
function Contact() {
  const form1 = useRef();
  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(form1);

    emailjs
      .sendForm(
        "service_xa6pcit",
        "template_u4hdv1r",
        form1.current.nativeElement,
        {
          publicKey: "qnEqEZSbtwM2mlGIA",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          values.username = "";
          values.email = "";
          values.subject = "";
          values.message = "";
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="p-3 contact-info">
        <p>
          <LocationOnIcon color="success" /> : Chennai, Tamilnadu
        </p>
        <p>
          <MailIcon color="success" />: vigneshvickybsc1999@gmail.com
        </p>
        <p>
          {" "}
          <LocalPhoneIcon color="success" />: +91 8825559375
        </p>
      </div>
      <div className="p-3 contact-form">
        <p>Let's get in touch send me a message :</p>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} ref={form1}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" placeholder="Name" name="username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email !",
              },
            ]}
          >
            <Input size="large" placeholder="Email" type="email" name="email" />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input your Subject!",
              },
            ]}
          >
            <Input size="large" placeholder="Subject" name="subject" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your Message !",
              },
            ]}
          >
            <TextArea
              rows={4}
              placeholder="Enter Your Message"
              name="message"
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              style={{ padding: 20 }}
              icon={<SendOutlined />}
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Contact;
