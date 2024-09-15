package types

type Usuarios struct {
	Id_usuario        int
	Nombre            string
	Apellidos         string
	Grupo_id          string
	Monto_a_deber     float32
	Deberes_asignados []int
}

type Grupos struct {
	Id_grupo     int
	Num_personas int
}

type Deberes struct {
	Id_deber   int
	Id_usuario int
	Nombre     string
	Completado bool
}

type Recibos struct {
	Id_recibo    int
	Monto        int
	Grupo_id     int
	Fecha_limite string
}

type Gastos struct {
	Id_gasto        int
	Nombre          string
	Monto           int
	Id_usuario      int
	Fecha_del_gasto string
}

type Reportes struct {
	Id_reporte  int
	Id_usuario  int
	Nombre      string
	Descripcion string
}
