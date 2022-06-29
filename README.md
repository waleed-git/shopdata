# shopdata

app to do some data analysis for input csv file by generating 2 files written by nodejs

# Requirments to  compile the app

- download npm & node packages `apt-get update && apt install npm `

- install node   `npm install`

- compile code   `node app.js`

- Give input file path `input/test.csv`

- It will generate 2 file like below 


```
wel@FB-944:/mnt/d/code/shopdata$ npm -v
6.14.4
wel@FB-944:/mnt/d/code/shopdata$ node -v
v10.19.0

wel@FB-944:/mnt/d/code/shopdata$ node app.js
Please enter file path:input/test.csv
File is created successfully.
File is created successfully.
wel@FB-944:/mnt/d/code/shopdata$ ls
0_test.csv  1_test.csv  app.js  input  node_modules  package-lock.json  package.json


wel@FB-944:/mnt/d/code/shopdata$ cat 0_test.csv
shoes,2
forks,0.75

wel@FB-944:/mnt/d/code/shopdata$ cat 1_test.csv
shoes,BonPied
forks,Pfitzcraft

```






