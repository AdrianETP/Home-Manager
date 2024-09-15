package types

type Usuarios struct {
	Nombre            string  `json:"nombre"`
	Apellidos         string  `json:"apellidos"`
	Grupo_id          int     `json:"grupo_id"`
	Monto_a_deber     float32 `json:"monto_a_deber"`
	Deberes_asignados []int   `json:"deberes_asignados"`
}

type Grupos struct {
	Id           int `json:"_id" bson:"_id" `
	Num_personas int `json:"num_personas"`
}

type Deberes struct {
	Id         int    `json:"_id" bson:"_id"`
	Id_usuario int    `json:"id_usuario"`
	Nombre     string `json:"nombre"`
	Completado bool   `json:"completado"`
}

type Recibos struct {
	Id           int    `json:"_id" bson:"_id"`
	Monto        int    `json:"monto"`
	Grupo_id     int    `json:"grupo_id"`
	Fecha_limite string `json:"fecha_limite"`
	Tipo         string `json:"tipo"`
}

type Gastos struct {
	Id              int    `json:"_id" bson:"_id"`
	Nombre          string `json:"nombre"`
	Monto           int    `json:"monto"`
	Id_usuarios     []int  `json:"id_usuarios"`
	Fecha_del_gasto string `json:"fecha_del_gasto"`
}

type Reportes struct {
	Id          int    `json:"_id" bson:"_id"`
	Id_usuario  int    `json:"id_usuario"`
	Nombre      string `json:"nombre"`
	Descripcion string `json:"descripcion"`
}
