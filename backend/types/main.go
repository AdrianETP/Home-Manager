package types

type Usuarios struct {
	id_usuario        int
	nombre            string
	apellidos         string
	grupo_id          string
	monto_a_deber     float32
	deberes_asignados []int
}

type Grupos struct {
	id_grupo     int
	num_personas int
}

type Deberes struct {
	id_deber   int
	id_usuario int
	nombre     string
	completado bool
}

type Recibos struct {
	id_recibo    string
	monto        int
	grupo_id     int
	fecha_limite string
}

type Gastos struct {
	id_gasto        int
	nombre          string
	monto           int
	id_usuario      int
	fecha_del_gasto string
}

type Reportes struct {
	id_reporte  int
	id_usuario  int
	nombre      string
	descripcion string
}
