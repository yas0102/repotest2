# WM-22

Web Mapping 2022, ESCGIT course project: creating a geoportal ...

# How to do it:

For local development check [this](https://github.com/ayoubft/demo-postgis-nodejs).

1. Make this changes to your working directory

   | File   | index.js                 | connection.js        | package.json                |
   | ------ | ------------------------ | -------------------- | --------------------------- |
   | Change | listen port to heroku db | connect to heroku db | run `node index.js` command |

   ![Screenshot_20220228_112501](https://user-images.githubusercontent.com/63267601/155966828-9b1048eb-10c3-483f-b8c2-d89f1cf8b598.png)

2. Go to https://dashboard.heroku.com/apps (create your account)
3. Create new app (give it a name)
4. Add postgres extension to your app in `Resources` tab

   ![Screenshot_20220228_104913](https://user-images.githubusercontent.com/63267601/155961716-14fca10c-00db-4c7b-9570-71b66a3bcb02.png)

5. Choose `Hobby Dev` plan

   ![Screenshot_20220228_105027](https://user-images.githubusercontent.com/63267601/155961951-47187737-b58d-47e3-a081-2e1e320a2fe6.png)

6. Click on your newly created database

   ![Screenshot_20220228_105211](https://user-images.githubusercontent.com/63267601/155962220-dcafe7de-fd4c-4d44-a68a-b263406e0903.png)

7. Go to settings and get you credentials

   ![Screenshot_20220228_105314](https://user-images.githubusercontent.com/63267601/155962383-5a6e702c-7aee-4536-b3dd-4a84bea95205.png)

8. Connect to your database externally (I am using `DBeaver`)

   ![Screenshot_20220228_105903](https://user-images.githubusercontent.com/63267601/155963231-4351d83c-8016-4b7a-b74f-84895897defe.png)

9. Make it **SPATIAL**, and populate it (you can try from `qgis`) or export your tables as `.csv` and import them to heroku database

   ![Screenshot_20220228_110039](https://user-images.githubusercontent.com/63267601/155963433-d2f191ed-f059-4753-a943-2e8cd2377677.png)

10. Link your github repo

    ![Screenshot_20220228_104745](https://user-images.githubusercontent.com/63267601/155961512-2467c310-294c-4697-8a70-6747183fa334.png)

11. Deploy you app from `Deploy` tab using manual deploy

    ![Screenshot_20220228_110513](https://user-images.githubusercontent.com/63267601/155964152-68f9bc5a-4917-4d76-81a8-bd0464bb6535.png)

12. Enjoy! Link: https://demo-postgis-nodejs-heroku.herokuapp.com/

    ![Screenshot_20220228_112153](https://user-images.githubusercontent.com/63267601/155966345-2bd412b8-f694-4e23-a032-87d0c00ebec1.png)
