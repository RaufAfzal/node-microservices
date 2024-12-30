import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "../service/userService";

const userService = new UserService();

export const signUp = async (event: APIGatewayProxyEventV2) => {
  console.log("Event: ", event);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "AccessControlAllowOrigin": "*",
    },
    body: JSON.stringify({
      message: "Response from Signup",
      data: {},
    }),
  };
};

export const signIn = async (event: APIGatewayProxyEventV2) => {
    console.log("Event: ", event);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "AccessControlAllowOrigin": "*",
      },
      body: JSON.stringify({
        message: "Response from Signup",
        data: {},
      }),
    };
};

export const verify = async (event: APIGatewayProxyEventV2) => {
    console.log("Event: ", event);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "AccessControlAllowOrigin": "*",
      },
      body: JSON.stringify({
        message: "Response from Signup",
        data: {},
      }),
    };
};

export const profile = async (event: APIGatewayProxyEventV2) => {
    console.log("Event: ", event);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "AccessControlAllowOrigin": "*",
      },
      body: JSON.stringify({
        message: "Response from Signup",
        data: {},
      }),
    };
};

export const cart = async (event: APIGatewayProxyEventV2) => {
    console.log("Event: ", event);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "AccessControlAllowOrigin": "*",
      },
      body: JSON.stringify({
        message: "Response from Signup",
        data: {},
      }),
    };
};


export const payment = async (event: APIGatewayProxyEventV2) => {
    console.log("Event: ", event);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "AccessControlAllowOrigin": "*",
      },
      body: JSON.stringify({
        message: "Response from Signup",
        data: {},
      }),
    };
};