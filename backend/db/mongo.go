package db

// la unica funcion de este archivo es la conexion a la base de datos
// lo unico que tienen que hacer aqui es importar la variable "Database" a donde quieran usar la base de datos
import (
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

var Database *mongo.Database

func ConnectDB() {
	db, err := mongo.Connect(options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		panic(err)
	}

	Database = db.Database("kohabit")
}
