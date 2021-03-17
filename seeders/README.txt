1. create user with post man. Route: localhost:8081/signup
    body: 
        {
            "username": "demo",
            "email": "demo@dmo.com",
            "password": "asdf"
        }    

2. run seeds
    node ./champSeed.js
    node ./playerSeed.js
    node ./statSeed.js
    node ./teamSeed.js
    node ./genDemoChamp.js