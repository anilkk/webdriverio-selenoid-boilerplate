# webdriverio-selenoid-boilerplate
webdriverio automation tests with selenoid

## Steps to create

1. ` npm install  ` 

2. Start browser automation in minutes by copy-pasting just one command:
`curl -s https://aerokube.com/cm/bash | bash \
     && ./cm selenoid start --vnc --tmpfs 128`
  
     [more details about selenoid](https://github.com/aerokube/selenoid)
     
     & we can use Selenoid instead of Selenium server using url for local testing 
     `http://localhost:4444/wd/hub`
3. Replace <selenium-server-path> with Selenoid server host. From step 2 it will be 
`http://localhost` 