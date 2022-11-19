- first you need to intall pm2 package
```
npm i pm2 -g
```

- go to service dir
```
cd service
```

- to start socket service
```
npm start
```
&nbsp;&nbsp;socket server will run on port 3232<br/>
&nbsp;&nbsp;socket client api run on port 3233

- watch log from server
```
pm2 monit
```

- stop socket service
```
npm run stop
```
