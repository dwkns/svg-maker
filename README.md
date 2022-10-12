# SVG prototyper

A small instant reload server to allow you to prototype interactive SVGs

This project assumes the following:

- You have a good knowledge of HTML & CSS.
- You have [some experience](https://www.youtube.com/watch?v=ogWoUU2DXBU) with the command line. 
- You are using a Mac. 
- You have Admin privileges. 

## Getting set up

**Install** [Homebrew](https://brew.sh) 

**Install** some packages

```bash 
$ brew install yarn git node@18
```

**Close** that Terminal window

**Visit** https://code.visualstudio.com Download and Install.



## Configure the development environment

**Open** a new Terminal window

**Change the directory** to the Desktop

```bash
$ cd ~/Desktop
```



**Clone** the project

```bash
$ git clone https://github.com/dwkns/svg-maker.git 
```



**Change** into that directory

```bash
$ cd svg-maker
```



**Install** dependencies

```bash
$ yarn install
```



**Start** the server

```bash
$ yarn start
```



**Visit** http://localhost:8888; you should see the following:

![Screenshot-1](https://raw.githubusercontent.com/dwkns/svg-maker/e9fe50dd86570ce15e36c4eabfe0b6723941787e/readme-assets/screenshot-1.png)



## Using the SVG prototyper

With the server running...

**Edit** you SVG (or html) in  `src/index.html` — saving will refresh the browser.

Site wide CSS (like `font-family` definitions are in `src/styles/main.css`

Fonts are in `src/fonts/<font-file-name>` Eina is already installed. 



