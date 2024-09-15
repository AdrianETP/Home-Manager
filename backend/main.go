package main

import (
	"log"

	"github.com/adrianetp/kohabit/db"
	"github.com/adrianetp/kohabit/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	db.ConnectDB()
	app := fiber.New()
	app.Use(cors.New())

	routes.GetAllRoutes(app)
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("hello world")
	})
	log.Fatal(app.Listen(":80"))
}
