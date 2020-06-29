module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name?',
          validate: function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
          }
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.js',
          templateFile: 'plop-templates/Component.js.hbs',
        },
        {
          type: 'add',
          path: 'app/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
          templateFile:
            'plop-templates/Component.test.js.hbs',
        },
        {
          type: 'add',
          path:
            'app/components/{{pascalCase name}}/{{pascalCase name}}.style.js',
          templateFile:
            'plop-templates/style.js',
        },
      ],
    });
  };