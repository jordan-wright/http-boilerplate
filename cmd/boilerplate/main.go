package main

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/jordan-wright/http-boilerplate/server"
	"golang.org/x/crypto/acme/autocert"
)

func main() {
	// This is the domain the server should accept connections for.
	domains := []string{"example.com", "www.example.com"}
	handler := server.NewRouter()
	srv := &http.Server{
		Addr:         ":443",
		Handler:      handler,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  120 * time.Second,
	}
	// Start the server
	go func() {
		srv.Serve(autocert.NewListener(domains...))
	}()

	// Wait for an interrupt
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	<-c

	// Attempt a graceful shutdown
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	srv.Shutdown(ctx)
}
