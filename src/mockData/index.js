const Collection = {
  collection: {
    info: {
      _postman_id: "a50e1277-1ba5-4391-8937-80b388c049d9",
      name: "React JS Practical",
      schema:
        "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      updatedAt: "2023-03-15T12:31:23.000Z",
      createdAt: "2022-11-16T05:54:13.000Z",
      lastUpdatedBy: "21192250",
      uid: "21192250-a50e1277-1ba5-4391-8937-80b388c049d9",
    },
    item: [
      {
        name: "Get Settings",
        id: "c6ad2b8b-1556-45f7-9a05-04ade887cffe",
        protocolProfileBehavior: {
          disableBodyPruning: true,
        },
        request: {
          method: "GET",
          header: [],
          url: {
            raw: "{{url}}api/settings/fetch-frontend-details",
            host: ["{{url}}api"],
            path: ["settings", "fetch-frontend-details"],
            query: [
              {
                key: "id",
                value: "1",
                disabled: true,
              },
            ],
          },
        },
        response: [],
        uid: "21192250-c6ad2b8b-1556-45f7-9a05-04ade887cffe",
      },
      {
        name: "Get All Blogs",
        id: "33a8f5ca-de17-4f58-be7a-1f506d84e8bc",
        protocolProfileBehavior: {
          disableBodyPruning: true,
        },
        request: {
          method: "GET",
          header: [],
          url: {
            raw: "{{url}}api/blog/",
            host: ["{{url}}api"],
            path: ["blog", ""],
            query: [
              {
                key: "id",
                value: "1",
                disabled: true,
              },
            ],
          },
        },
        response: [],
        uid: "21192250-33a8f5ca-de17-4f58-be7a-1f506d84e8bc",
      },
      {
        name: "Contact Form",
        id: "36c37c07-8235-4e83-b6e9-1052d59e0e71",
        protocolProfileBehavior: {
          disableBodyPruning: true,
        },
        request: {
          method: "POST",
          header: [],
          body: {
            mode: "raw",
            raw: '{\n    "fname":"Test", "lname": "Practical", "email":"testuserxyz@mailinator.com", "phone":"1234567890", "budget":5000, "description":"Test description"\n}',
            options: {
              raw: {
                language: "json",
              },
            },
          },
          url: {
            raw: "{{url}}api/contact/send",
            host: ["{{url}}api"],
            path: ["contact", "send"],
            query: [
              {
                key: "id",
                value: "1",
                disabled: true,
              },
            ],
          },
        },
        response: [],
        uid: "21192250-36c37c07-8235-4e83-b6e9-1052d59e0e71",
      },
    ],
    event: [
      {
        listen: "prerequest",
        script: {
          id: "79fd73c8-0728-4e74-adf7-c8ddb923471c",
          type: "text/javascript",
          exec: [""],
        },
      },
      {
        listen: "test",
        script: {
          id: "e66be8a4-1c83-427a-b6b9-601b7a95a24d",
          type: "text/javascript",
          exec: [""],
        },
      },
    ],
    variable: [
      {
        key: "url",
        value: "",
        type: "string",
        disabled: true,
      },
      {
        key: "url",
        value: "http://3.7.81.243:3253/",
        type: "string",
      },
    ],
  },
};
