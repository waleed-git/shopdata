# shopdata

app to do some data analysis for input csv file by generating 2 files written by nodejs

# Requirments to  compile the app

- download npm & node packages `apt-get update && apt install npm `

- install node   `npm install`

- compile code will require input path   `node app.js`

- Give path `input/test.csv`

- it will generate 2 file like below 


```
wel@FB-944:/mnt/d/Fawry/code/task$ node app.js
Please enter file path:input/test.csv
File is created successfully.
File is created successfully.
wel@FB-944:/mnt/d/Fawry/code/task$ ls
0_test.csv  1_test.csv  app.js  input  node_modules  package-lock.json  package.json


 cat 0_test.csv
shoes,2
forks,0.75

 cat 1_test.csv
shoes,BonPied
forks,Pfitzcraft

```






