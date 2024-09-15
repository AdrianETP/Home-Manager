package main

import (
	"log"

	"github.com/adrianetp/home-manager/routes"
	"github.com/gofiber/fiber/v3"
)

func main() {
	app := fiber.New()

	routes.GetAllRoutes(app)
	app.Get("/", func(c fiber.Ctx) error {
		return c.SendString("hello world")
	})
	log.Fatal(app.Listen(":8080"))
}
