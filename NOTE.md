## npm install
* npm i -g 全局范围安装，该模块可以被系统中的任何一个文件或者项目调用，而不是仅在当前项目可用
* npm i -S 将模块添加到项目的 package.json 文件的 dependencies 中。这意味着在以后重新安装项目时，会自动安装这些依赖项。
* npm i -D 将模块添加到项目的 package.json 文件的 devDependencies 中。这意味着这些依赖项只在开发期间需要，而不是在生产环境中需要。

## .gitignore
项目中配置 .gitignore 文件，可以更改同步选项
## app.use(express.json());
这里使用了 Express 中内置的 json 中间件，它的作用是解析传入请求的 JSON 格式的数据，并将解析后的数据存放在 req.body 对象中，使得后续的路由处理函数可以直接访问请求中的数据。

具体来说，当客户端向服务器发送一个包含 JSON 格式数据的请求时，json 中间件会将请求的主体部分解析为一个 JavaScript 对象，然后将这个对象作为 req.body 中的属性存储。这使得我们可以在处理该请求的路由处理函数中轻松访问该对象的属性，以便进行相应的操作。


