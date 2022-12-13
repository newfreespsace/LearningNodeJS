### SYNCHRONOUS VS. ASYNCHRONOUS CODE (BLOCKING VS. NON-BLOCKING)
#### 同步
每行代码一行一行饿的执行，每一行代码会等待上一行代码运行的结果，每一行都会阻塞其他代码，我们称同步代码为阻塞代码。
#### 异步
将复杂的工作上传至后台处理，等工作完成后，将执行我们注册的回调函数，在此期间，其余代码可以继续执行。

### THE ASYNCHRONOUS NATURE OF NODE.JS: AN OVERVIEW
* Node.js is single-threaded

### THE PROBLEM: CALLBACK HELL...
* SOLUTIO: Using Promises or Async/Await