# juniordevpositions

in development



```
/worker/tasks/fetch-github.js
```

fetchs data from the Github Jobs API. It also filters the data and stores it using Redis

```
/worker/index.js
```

is a Cron worker that runs fetch-github.js every hour

```
/api/index.js
```

serves the data in localhost:3001

```
/client
```

React with MUI frontend fetchs the data from the API

---

with Redis installed and running

```
node /worker/tasks/fetch-github.js
```

```
node /api/index.js
```

```
cd client
```

```
yarn start
```
