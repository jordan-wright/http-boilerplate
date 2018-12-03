# http-boilerplate

An example of a reasonably complex web server in Go.

## What's Included

This is a boilerplate application designed to show how to build web applications in Go. The following features are already set up:

* HTTPS through Let's Encrypt
* An API subrouter
* A demo of authentication middleware
* Static file serving
* Graceful shutdown

This application largely uses the standard library. Routing is provided by the `go-chi/chi` package, and Let's Encrypt functionality is provided by the `autocert` package.

## More Information

For more information on the design behind this boilerplate, please refer to [the blog post](https://getgophish.com/blog/post/2018-12-02-building-web-servers-in-go/).

## Usage

To start using this library, it's recommend to fork this repository. Then, you can update the import paths to point to your local copy.

## Pull Requests Welcome!

This is just one way to structure web servers in Go. I'd love to get feedback on possible improvements, so please don't hesitate to send a [pull request!](https://github.com/jordan-wright/http-boilerplate/pulls)
