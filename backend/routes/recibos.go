package routes

import (
	"context"
	"log"

	"github.com/adrianetp/kohabit/db"
	"github.com/adrianetp/kohabit/types"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/v2/bson"
)

func GetAllRecibos(app *fiber.App) {
	app.Get("recibos/electricidad", func(c *fiber.Ctx) error {
		cursor, err := db.Database.Collection("Recibos").Find(context.TODO(), bson.D{{"tipo", "Electricidad"}})
		if err != nil {
			return c.JSON(fiber.Map{
				"error": err,
			})
		}
		var res []types.Recibos

		if err = cursor.All(context.TODO(), &res); err != nil {
			panic(err)
		}

		var maxRecibo types.Recibos
		maxId := -1 // Assuming id is an integer, initialize to a value less than any valid id
		for _, recibo := range res {
			if recibo.Id > maxId {
				maxId = recibo.Id
				maxRecibo = recibo
			}
		}

		return c.JSON(fiber.Map{
			"recibo": maxRecibo,
		})
	})
	app.Post("recibos/servicios", func(c *fiber.Ctx) error {
		var recibo types.Recibos

		if err := c.BodyParser(&recibo); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid JSON input",
			})
		}
		log.Println(recibo.Id)

		count, error := db.Database.Collection("Recibos").CountDocuments(context.TODO(), bson.D{})

		if error != nil {
			log.Fatal(error)
		}
		recibo.Id = int(count) + 1

		result, error := db.Database.Collection("Recibos").InsertOne(context.TODO(), recibo)

		if error != nil {
			log.Fatal(error)
		}

		return c.JSON(fiber.Map{
			"resultado": result,
			"recibo":    recibo,
		})
	})
	app.Get("recibos/electricidad/xpersona", func(c *fiber.Ctx) error {
		cursor, err := db.Database.Collection("Recibos").Find(context.TODO(), bson.D{{"tipo", "Electricidad"}})
		if err != nil {
			return c.JSON(fiber.Map{
				"error": err,
			})
		}
		var res []types.Recibos

		if err = cursor.All(context.TODO(), &res); err != nil {
			panic(err)
		}

		var maxRecibo types.Recibos
		maxId := -1 // Assuming id is an integer, initialize to a value less than any valid id
		for _, recibo := range res {
			if recibo.Id > maxId {
				maxId = recibo.Id
				maxRecibo = recibo
			}
		}
		log.Println(maxRecibo.Grupo_id)
		var group types.Grupos

		db.Database.Collection("Grupos").FindOne(context.TODO(), bson.D{{"_id", maxRecibo.Grupo_id}}).Decode(&group)

		precioxpersona := maxRecibo.Monto / group.Num_personas

		return c.JSON(fiber.Map{
			"monto_por_persona": precioxpersona,
		})
	})

	app.Get("recibos/agua", func(c *fiber.Ctx) error {
		cursor, err := db.Database.Collection("Recibos").Find(context.TODO(), bson.D{{"tipo", "Agua"}})
		if err != nil {
			return c.JSON(fiber.Map{
				"error": err,
			})
		}
		var res []types.Recibos

		if err = cursor.All(context.TODO(), &res); err != nil {
			panic(err)
		}

		var maxRecibo types.Recibos
		maxId := -1 // Assuming id is an integer, initialize to a value less than any valid id
		for _, recibo := range res {
			if recibo.Id > maxId {
				maxId = recibo.Id
				maxRecibo = recibo
			}
		}

		return c.JSON(fiber.Map{
			"recibo": maxRecibo,
		})
	})

	app.Get("recibos/agua/xpersona", func(c *fiber.Ctx) error {
		cursor, err := db.Database.Collection("Recibos").Find(context.TODO(), bson.D{{"tipo", "Agua"}})
		if err != nil {
			return c.JSON(fiber.Map{
				"error": err,
			})
		}
		var res []types.Recibos

		if err = cursor.All(context.TODO(), &res); err != nil {
			panic(err)
		}

		var maxRecibo types.Recibos
		maxId := -1 // Assuming id is an integer, initialize to a value less than any valid id
		for _, recibo := range res {
			if recibo.Id > maxId {
				maxId = recibo.Id
				maxRecibo = recibo
			}
		}
		log.Println(maxRecibo.Grupo_id)
		var group types.Grupos

		db.Database.Collection("Grupos").FindOne(context.TODO(), bson.D{{"_id", maxRecibo.Grupo_id}}).Decode(&group)

		precioxpersona := maxRecibo.Monto / group.Num_personas

		return c.JSON(fiber.Map{
			"monto_por_persona": precioxpersona,
		})
	})

	app.Get("recibos/gas", func(c *fiber.Ctx) error {
		cursor, err := db.Database.Collection("Recibos").Find(context.TODO(), bson.D{{"tipo", "Gas"}})
		if err != nil {
			return c.JSON(fiber.Map{
				"error": err,
			})
		}
		var res []types.Recibos

		if err = cursor.All(context.TODO(), &res); err != nil {
			panic(err)
		}

		var maxRecibo types.Recibos
		maxId := -1 // Assuming id is an integer, initialize to a value less than any valid id
		for _, recibo := range res {
			if recibo.Id > maxId {
				maxId = recibo.Id
				maxRecibo = recibo
			}
		}

		return c.JSON(fiber.Map{
			"recibo": maxRecibo,
		})
	})

	app.Get("recibos/gas/xpersona", func(c *fiber.Ctx) error {
		cursor, err := db.Database.Collection("Recibos").Find(context.TODO(), bson.D{{"tipo", "Gas"}})
		if err != nil {
			return c.JSON(fiber.Map{
				"error": err,
			})
		}
		var res []types.Recibos

		if err = cursor.All(context.TODO(), &res); err != nil {
			panic(err)
		}

		var maxRecibo types.Recibos
		maxId := -1 // Assuming id is an integer, initialize to a value less than any valid id
		for _, recibo := range res {
			if recibo.Id > maxId {
				maxId = recibo.Id
				maxRecibo = recibo
			}
		}
		log.Println(maxRecibo.Grupo_id)
		var group types.Grupos

		db.Database.Collection("Grupos").FindOne(context.TODO(), bson.D{{"_id", maxRecibo.Grupo_id}}).Decode(&group)

		precioxpersona := maxRecibo.Monto / group.Num_personas

		return c.JSON(fiber.Map{
			"monto_por_persona": precioxpersona,
		})
	})
}
