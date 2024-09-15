package routes

import "github.com/gofiber/fiber/v2"

func GetAllRoutes(app *fiber.App) {
	GetAllRecibos(app)
	GetAllGastos(app)
}
