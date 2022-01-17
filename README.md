### How to run the projetc
To run the project on your computer you need to have the git installed to clone the project, it's necessary the node.js or yarn(I recommend using yarn) to manage the packages. When you had these things installed, just follow the steps below:
```bash
$ git clone https://github.com/SamuelGDMG/shopy.git

$ cd shopy

$ yarn

$ yarn start
```
After you follow these steps and don't catch any error, you can see the project typing **localhost:8080** on the browser. To stop the project just press **CTRL + C** in the console you started the server.

### State Management
- Redux toolkit to manage the state of the application
	- It's a simple application, but the purpose to use the redux toolkit and not context it's because context it's not state management and the toolkit it's a pattern to help us to organize the actions and state's application.

### Project's goal
- The purpose of the project it's to be simple and organized;
- It's a simple ecommerce.

### Tests
- To mock the API was used the package **msw**;
- You can find the mocks on **src/mocks** and the configuration on **src/setupTests**;
- Remember, this project uses redux, and to build tests with redux it's necessary extra configuration that you can find in **src/utils/test-utils**,
