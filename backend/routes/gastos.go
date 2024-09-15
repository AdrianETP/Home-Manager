package routes

import (
	"context"

	"github.com/adrianetp/kohabit/db"
	"github.com/adrianetp/kohabit/types"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/v2/bson"
)

func GetAllGastos(app *fiber.App) {
	app.Get("gastos/", func(c *fiber.Ctx) error {
		filter := bson.D{{"id_usuarios", bson.D{{"$in", []int{1}}}}}

		cursor, err := db.Database.Collection("Gastos").Find(context.TODO(), filter)
		if err != nil {
			return c.JSON(fiber.Map{
				"error": err,
			})
		}
		var lista []types.Gastos

		if err = cursor.All(context.TODO(), &lista); err != nil {
			panic(err)
		}

		var elementos []struct {
			Gastos        types.Gastos
			Costoxpersona int
		}

		// Process each `gasto` and append to `elementos`
		for _, gasto := range lista {
			// Example calculation for `costoxpersona` (modify as needed)
			costoxpersona := gasto.Monto / len(gasto.Id_usuarios) // Replace with actual calculation

			// Create an instance of the anonymous struct
			elemento := struct {
				Gastos        types.Gastos
				Costoxpersona int
			}{
				Gastos:        gasto,
				Costoxpersona: costoxpersona,
			}

			// Append the instance to `elementos`
			elementos = append(elementos, elemento)
		}

		return c.JSON(fiber.Map{
			"gastos": elementos,
		})
	})
}
