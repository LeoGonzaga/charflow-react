module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Digite o nome do componente:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/styles.ts",
        templateFile: "./templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/index.ts",
        templateFile: "./templates/index.ts.hbs",
      },
    ],
  });
};
