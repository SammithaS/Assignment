# Utilizing DevRev API
In this repository, `DevRev API utilization` folder contains code for creating work items using the Devrev API. DevRev is a platform designed to streamline work management, and this script helps in the creation of work items directly through their API.

**The features are:**
* Create work-item(ticket or issue).
* WebUI based, easy to use.

### Tech stack
   HTML, CSS, JavaScript
   
### Steps to run

1. Create a `DevRev account` or log in.
3. Create `DevRev Oraganization`.
4. Generate a Personal Access Token(PAT) and store it somewhere safe.
5. Clone the repository:

   ```
   https://github.com/SammithaS/Assignment.git
   ```
7. Click on respective folder.
8. Replace with your token and owner id in `workItem.js file`.
9. Run the `index.html` file in the local server:

   ```
   http://127.0.0.1:5500/index.html
   ```
10. Now you can enter properties information in the input fields and submit.
11. Work-item is created successfully.

## Snapshot

![image](https://github.com/SammithaS/Assignment/assets/121117205/170ed1a8-8965-4cae-8467-2ca205b289fa)



# Hello-world snap-in(Priority Assigment)
`Priority Assignment Automation(Hello-world snap-in)` contains code for automating priority assignment. It gets triggered each time new work-item is created.

**The features are:**
* Assigns priority automatically when work-item is created.
* Can change priority in configuration of snap-in.
  
### Tech stack
   TypeScript
   
### Steps to run

1. Clone the repository:

   ```
   https://github.com/SammithaS/Assignment.git
   ```
3. Click on respective folder.
4. Navigate to root of project directory.
5. In the `code` directory create .env file and initialize your token.
6. Open terminal and enter these commands to run (Make sure you have `Node.js` in your system):

   ```
   npm install
   npm run build
   npm run package
   ```
8. You can also test locally if you want to make any changes using this command:

   ```
   npm run start:watch -- --functionName=function_1 --fixturePath=function_1_event.json
   ```
10. You will see a `build.tar.gz` file is created and you can provide it while creating the snap_in_version.
11. Install following prequisites( Refer [DevRev documentation](https://developer.devrev.ai/about/for-developers) for more information):
  
   ```
   Install DevRev CLI
   Install jq
   Install DevRev SDK
   ```
11. To authenticate using `DevRev CLI`, run the following command:

     ```
    devrev profiles authenticate -o <dev-org-slug> -u <youremail@yourdomain.com>
    ```
13. To create a `snap-in package`, run the following command:

     ```
    devrev snap_in_package create-one --slug my-first-snap-in | jq .
    ```
15. To create a `snap-in version`, run the following command:

     ```
    devrev snap_in_version create-one --manifest manifest.yaml --archive build.tar.gz | jq
    ```
17. Now run:

     ```
    devrev snap_in draft
    ```
19. The snap-in is installed in draft state. It may require some configuration before it can be deployed.
    >In this case you have to enter priority which is used to assign priority automatically when the issue is created.
20. Once you have provided the required configuration, the Deploy snap-in button is enabled on the UI. Click on it to deploy the snap-in. That’s it, the snap-in should now be active and ready to use.

## Snapshots 

![image](https://github.com/SammithaS/Assignment/assets/121117205/91842f8c-9234-45ae-b20e-9e734fe1134b)


![image](https://github.com/SammithaS/Assignment/assets/121117205/4413de0f-26af-47de-b3cb-e24878be0d0c)


![image](https://github.com/SammithaS/Assignment/assets/121117205/74169f48-aa0c-4a9a-8642-a221e643c90b)

# Cloning Snap-in for CLI
The folder includes the source code for a cloning snap-in. This helps users to duplicate or clone existing work items, such as tickets or issues, within a system CLI.

**The special features are:**
* Clone single or multiple work-items.
* List all work-item's ids in CLI.
* Customize properties such as title, description.
* Choose either ticket or issue.
  
### Tech stack
   TypeScript
   
### Steps to run

1. Clone the repository:

    ```
   https://github.com/SammithaS/Assignment.git
   ```
3. Click on respective folder.
4. Navigate to root of project directory.
5. In the `code` directory create .env file and initialize your token.
6. Open terminal and test locally if you want to make any changes using this command:

    ```
   npm install
   npm run start:watch -- --functionName=function_1 --fixturePath=function_1_event.json
   ```
8. Once test is successful you can run for production:

   ```
    npm run start:production -- --functionName=function_1 --fixturePath=function_1_event.json
   ```

**This snap-in is specifically developed for CLI which provides various features while cloning.**

* After it runs, you can enter two commands either `clone-work-item` or `clone-work-item m`.
* **clone-work-item** is used to create single work item either `ticket` or `issue`.
* **clone-work-item m** is used to create multiple work items at once.
* You can also choose between `ticket` or `issue` in the next step.
* It will ask whether you know the `work-id`; if not, it will provide a command to display a **list** of work items in CLI.
* Otherwise, it will ask for the `work-id` and proceed to cloning.
* After providing the work-id, it also has a feature to customize the properties. If you want to customize, you can; otherwise, it proceeds to cloning without customizing.
* In multiple cloning, you have to provide a list of work-ids separated by commas. It will clone every work-id provided in the command line.

**Below is the example**  

![image](https://github.com/SammithaS/Assignment/assets/121117205/0d093514-3457-4b75-9b72-6acb21bdc4e3)



![image](https://github.com/SammithaS/Assignment/assets/121117205/1231722d-6833-4223-a6d0-85af0223b700)







