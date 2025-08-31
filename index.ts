// index.js
#!/usr/bin/env node

function main() {
  console.log("Hello from my awesome CLI! 🚀 Version: " + process.env.npm_package_version);
}

function testRelease() {
  console.log("test!!");
}

type ex1 = {
  name: string,
  age: number
}

interface ex2 {
  name: string,
  age: number
}

const i:ex2;

main();