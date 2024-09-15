package routes

import (
	"github.com/adrianetp/home-manager/types"
	"github.com/gofiber/fiber/v3"
)

func GetAllRecibos(app *fiber.App) {
	app.Get("recibos/electricidad", func(c fiber.Ctx) error {
		var electricidad types.Recibos
		electricidad = types.Recibos{
			Id_recibo:    1,
			Monto:        100,
			Grupo_id:     1,
			Fecha_limite: "03-03-3003",
		}
		return c.JSON(fiber.Map{
			"status": 200,
			"recibo": electricidad,
		})
	})
	app.Post("recibos/electricidad", func(c fiber.Ctx) error {
		var body types.Recibos
		return c.Bind().Body(body)
	})
}
