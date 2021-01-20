<?php
    require_once 'vendor/autoload.php';

    $app = new \Slim\Slim();

    $db = new mysqli('localhost', 'root', '', 'curso-angular');


    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "OPTIONS") {
        die();
    }

    //LISTAR TODOS LOS PRODUCTOS
    $app->get('/productos', function() use($db, $app){
        $sql = 'SELECT * FROM productos ORDER BY id DESC;';
        $query = $db->query($sql);
        $productos = array();
        while ($producto = $query->fetch_assoc()) {
            $productos[] = $producto; 
        }

        $result = array(
            'status' => 'success',
            'code' => 200,
            'data' => $productos
        );

        echo json_encode($result);
    });

    //LISTAR PRODUCTO POR ID
    $app->get('/productos/:id', function($id) use($db, $app){
        $sql = 'SELECT * FROM productos WHERE id = '.$id;
        $query = $db->query($sql);
        
        $result = array(
            'status' => 'error',
            'code' => 404,
            'message' => 'producto no encontrado'
        );
        if ($query->num_rows == 1) {
            $producto = $query->fetch_assoc();
            $result = array(
                'status' => 'success',
                'code' => 200,
                'data' => $producto
            );
        }

        echo json_encode($result);
    });

    // ELIMINAR POR ID
    $app->get('/delete-producto/:id', function($id) use($db, $app){
        $sql = 'DELETE FROM productos WHERE id ='.$id;
        $query = $db->query($sql);

        if ($query) {
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'producto eliminado exitosamente'
            );
        }else{
            $result = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'producto no se ha eliminado exitosamente'
            );

        }

        echo json_encode($result);
    });

    // ACTUALIZAR UN PRODUCTO
    $app->post('/update-producto/:id', function($id) use($db, $app){
        $json = $app->request->post('json');
        $data = json_decode($json, true);
        $sql = "UPDATE productos SET ".
                "nombre = '{$data["nombre"]}',".
                "descripcion = '{$data["descripcion"]}',";
                if (isset($data['imagen'])) {
        $sql .= "imagen = '{$data["imagen"]}',";
                }

        $sql .= "precio = '{$data["precio"]}' WHERE id = {$id}";
        
        $query = $db->query($sql);

        if ($query) {
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'producto actualizado exitosamente'
            );
        }else{
            $result = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'producto no actualizado'
            );

        }

        echo json_encode($result);
    });


    // SUBRI UNA IMAGEN A UN PRODUCTO
    $app->post('/upload-file', function() use($db, $app){
        $result = array(
            'status' => 'error',
            'code' => 404,
            'message' => 'El archivo no se ha logrado cargar'
        );
        if (isset($_FILES['uploads'])) {
            $piramideUploader = new PiramideUploader();
            $upload = $piramideUploader->upload('image', "uploads", "uploads", array('image/jpeg', 'image/png', 'image/gif'));
            $file = $piramideUploader->getInfoFile();
            $file_Name = $file['complete_name'];

            if (isset($upload) && $upload["uploaded"] == false) {
                $result = array(
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'El archivo no se ha logrado cargar'
                );
            }else {
                $result = array(
                    'status' => 'succes',
                    'code' => 200,
                    'message' => 'archivo cargado exitosamente',
                    'filename'=> $file_Name

                );
            }
        }
        echo json_encode($result);
    });







    
    //GUARDAR UN PRODUCTO
    $app->post('/productos', function() use($app, $db){
        $json = $app->request->post('json');
        $data = json_decode($json, true);

        if (!isset($data['nombre'])) {
            $data['nombre'] = null;
        }

        if (!isset($data['descripcion'])) {
            $data['descripcion'] = null;
        }

        if (!isset($data['precio'])) {
            $data['precio'] = null;
        }

        if (!isset($data['imagen'])) {
            $data['imagen'] = null;
        }
        $query = "INSERT INTO productos VALUES(NULL,".   
            "'{$data['nombre']}',".
            "'{$data['descripcion']}',".
            "'{$data['precio']}',".
            "'{$data['imagen']}'".
            ");";

        $insert = $db->query($query);

        $result = array(
            'status' => 'erre',
            'code' => 404,
            'message' => 'producto NO se creado'
        );

        if ($insert) {
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'producto creado correctamente'
            );
        }
        echo json_encode($result);
    });




    //GUARDAR CIUDADES
    $app->post('/ciudades', function() use($app, $db){
        $json = $app->request->post('json');
        $data = json_decode($json, true);

        if (!isset($data['departmentid'])) {
            $data['departmentid'] = 1;
        }

        if (!isset($data['name'])) {
            $data['name'] = 'medellin';
        }

        if (!isset($data['description'])) {
            $data['description'] = 'eterna primavera';
        }

        if (!isset($data['inactive'])) {
            $data['inactive'] = true;
        }
        $query = "INSERT INTO ciudades VALUES(NULL,".   
            "'{$data['departmentid']}',".
            "'{$data['name']}',".
            "'{$data['description']}',".
            "'{$data['inactive']}'".
            ");";

        $insert = $db->query($query);

        $result = array(
            'status' => 'error',
            'code' => 404,
            'message' => 'ciudad NO se creado'
        );

        if ($insert) {
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'ciudad creado correctamente'
            );
        }
        echo json_encode($result);
    });


    //LISTAR TODAS LAS CIUDADES
    $app->get('/ciudades', function() use($db, $app){
        $sql = 'SELECT * FROM ciudades ORDER BY cityid DESC;';
        $query = $db->query($sql);
        $ciudades = array();
        while ($ciudad = $query->fetch_assoc()) {
            $ciudades[] = $ciudad; 
        }

        $result = array(
            'status' => 'success',
            'code' => 200,
            'data' => $ciudades
        );

        echo json_encode($ciudades);
    });


    //LISTAR CUDADES POR ID
    $app->get('/ciudades/:cityid', function($cityid) use($db, $app){
        $sql = 'SELECT * FROM ciudades WHERE cityid = '.$cityid;
        $query = $db->query($sql);
        
        $result = array(
            'status' => 'error',
            'code' => 404,
            'message' => 'ciudad no encontrada'
        );
        if ($query->num_rows == 1) {
            $ciudad = $query->fetch_assoc();
            $result = array(
                'status' => 'success',
                'code' => 200,
                'data' => $ciudad
            );
        }

        echo json_encode($result);
    });

    // ELIMINAR POR ID
    $app->get('/delete-ciudad/:cityid', function($cityid) use($db, $app){
        $sql = 'DELETE FROM ciudades WHERE cityid ='.$cityid;
        $query = $db->query($sql);

        if ($query) {
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'ciudad eliminada exitosamente'
            );
        }else{
            $result = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'la ciudad no se ha eliminado exitosamente'
            );

        }

        echo json_encode($result);
    });


    // ACTUALIZAR UNA CIUDAD
    $app->post('/update-ciudad/:cityid', function($cityid) use($db, $app){
        $json = $app->request->post('json');
        $data = json_decode($json, true);
        $sql = "UPDATE ciudades SET ".
                "departmentid = '{$data["departmentid"]}',".
                "name = '{$data["name"]}',".
                "description = '{$data["description"]}',".
                "inactive = '{$data["inactive"]}' WHERE cityid = {$cityid}";
        
        $query = $db->query($sql);

        if ($query) {
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'Ciudad  actualizada exitosamente'
            );
        }else{
            $result = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'Ciudad no se ha actualizado'
            );

        }

        echo json_encode($result);
    });

    $app->run();
?>