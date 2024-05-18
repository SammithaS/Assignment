# Utilizing DevRev API
In this repository, `DevRev API utilization` folder contains code for creating work items using the Devrev API. DevRev is a platform designed to streamline work management, and this script helps in the creation of work items directly through their API.

### Tech stack
   HTML, CSS, JavaScript
   
### Steps
1. Create a `DevRev account` or log in.
2. Create `DevRev Oraganization`.
3. Generate a Personal Access Token(PAT) and store it somewhere safe.
4. Clone the repository
   ```
   https://github.com/SammithaS/Assignment.git
   ```
5. Click on respective folder
6. Replace with your token and owner id
7. Run the `index.html` file in the local server
   ```
   http://127.0.0.1:5500/index.html
   ```
8. Now you can enter properties information in the input fields and submit.
9. Work-item is created successfully.

### snapshot

# Hello-world snap-in(Priority Assigment)
`Priority Assignment Automation(Hello-world snap-in)` contains code for automating priority 
### Tech stack
   TypeScript
   
### Steps
1. Clone the repository
```
https://github.com/SammithaS/Assignment.git
```
2. Click on respective folder.
3. Navigate to root of project directory.
4. In the `code` directory create .env file and initialize your token.
5. Open terminal and enter these commands to run (Make sure you have `Node.js` in your system)
   ```
   npm install
   npm run build
   npm run package
   ```
6. You can also test locally if you want to make any changes using this command
   ```
   npm run start:watch -- --functionName=function_1 --fixturePath=function_1_event.json
   ```
7. You will see a `build.tar.gz` file is created and you can provide it while creating the snap_in_version.
8. Install following prequisites. Refer [DevRev documentation](https://developer.devrev.ai/about/for-developers) for more information.
   ```
   Install DevRev CLI
   Install jq
   Install DevRev SDK
   ```
9. To authenticate using DevRev CLI, run the following command:
    ```
    devrev profiles authenticate -o <dev-org-slug> -u <youremail@yourdomain.com>
    ```
10. To create a snap-in package, run the following command:
    ```
    devrev snap_in_package create-one --slug my-first-snap-in | jq .
    ```
11. 


# Cloning Snap-in for CLI

### Tech stack
   TypeScript
