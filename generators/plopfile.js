const isNotEmptyFor = (prompt) => (value) => {
  if (!value) return prompt + " is required";
  return true;
};

module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
        validate: isNotEmptyFor("name"),
      },
      {
        type: "list",
        name: "type",
        message: "Choose the type of component you want to generate",
        default: "components",
        choices: [
          { name: "component", value: "components" },
          { name: "element", value: "elements" },
          { name: "layout", value: "layout" },
          { name: "module", value: "modules" },
        ],
      },
    ],

    actions: [
      {
        type: "addMany",
        destination: "../src/{{type}}/{{pascalCase name}}",
        base: "templates/component",
        templateFiles: "templates/component/*.hbs",
      },
    ],
  });
};
