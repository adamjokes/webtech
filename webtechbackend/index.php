<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require 'api/db.php';
$app = new \Slim\App;

$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new \Monolog\Logger('test-app');
    $logger->pushHandler(new Monolog\Handler\StreamHandler('php://stdout', \Monolog\Logger::DEBUG));
    return $logger;
};

$app->get('/', function (Request $request, Response $response, array $args) {
    $response->getBody()->write("Hello there from root");
    return $response;
});

$app->get('/api', function (Request $request, Response $response, array $args) {
    $response->getBody()->write("Hello there from restful api");
    $this->get('logger')->info("Slim-Skeleton '/' route");
    return $response;
});

//API GET Picture
$app->get('/api/picture', function (Request $request, Response $response, array $args) {
    // $response->getBody()->write("get all user");
    // return $response;

    $sql = "SELECT * FROM picture";

    try {
        // Get DB Object
        $db = new db();
        // Connect
        $db = $db->connect();

        $stmt = $db->query($sql);
        $user = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($user);
    } catch (PDOException $e) {
        $data = array(
            "status" => "fail"
        );
        $this->get('logger')->info("Slim-Skeleton '/' route");
        echo json_encode($data);
    }
});

//API DELETE Picture
$app->delete('/api/picture/{id}', function (Request $request, Response $response, array $args) {
    $id = $args["id"];
    $sql = "DELETE FROM picture WHERE id = $id";

    try {
        // Get DB Object
        $db = new db();
        // Connect
        $db = $db->connect();

        $stmt = $db->prepare($sql);
        $stmt->execute();
        $count = $stmt->rowCount();

        $db = null;
        $data = array(
            "rowAffected" => $count,
            "status" => "success"
        );
        echo json_encode($data);
    } catch (PDOException $e) {
        $data = array(
            "status" => "fail"
        );
        echo json_encode($data);
    }
});

$app->get('/api/event1', function (Request $request, Response $response, array $args) {
    // $response->getBody()->write("get all user");
    // return $response;

    $sql = "SELECT * FROM event1";

    try {
        // Get DB Object
        $db = new db();
        // Connect
        $db = $db->connect();

        $stmt = $db->query($sql);
        $user = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($user);
    } catch (PDOException $e) {
        $data = array(
            "status" => "fail"
        );
        echo json_encode($data);
    }
});

$app->get('/api/event2', function (Request $request, Response $response, array $args) {
    // $response->getBody()->write("get all user");
    // return $response;

    $sql = "SELECT * FROM event2";

    try {
        // Get DB Object
        $db = new db();
        // Connect
        $db = $db->connect();

        $stmt = $db->query($sql);
        $user = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($user);
    } catch (PDOException $e) {
        $data = array(
            "status" => "fail"
        );
        echo json_encode($data);
    }
});

$app->get('/api/event3', function (Request $request, Response $response, array $args) {
    // $response->getBody()->write("get all user");
    // return $response;

    $sql = "SELECT * FROM event3";

    try {
        // Get DB Object
        $db = new db();
        // Connect
        $db = $db->connect();

        $stmt = $db->query($sql);
        $user = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($user);
    } catch (PDOException $e) {
        $data = array(
            "status" => "fail"
        );
        echo json_encode($data);
    }
});

// API POST EVENT 1
$app->post('/api/event1', function (Request $request, Response $response, array $args) {
    $title = $_POST["title"];
    $start = $_POST["start"];

    try {
        $sql = "INSERT INTO event1 (title,start) VALUES (:title,:start)";
        $db = new db();
        // Connect
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':title', $title);
        $stmt->bindValue(':start', $start);

        $stmt->execute();
        $count = $stmt->rowCount();
        $db = null;

        $data = array(
            "status" => "success",
            "rowcount" =>$count,
            "title" => $title,
            "start" => $start,
        );
        echo json_encode($data);
    } catch (PDOException $e) {
        $data = array(
            "status" => "fail"
        );
        echo json_encode($data);
    }
});

// API POST EVENT 2
$app->post('/api/event2', function (Request $request, Response $response, array $args) {
    $title = $_POST["title"];
    $start = $_POST["start"];

    try {
        $sql = "INSERT INTO event2 (title,start) VALUES (:title,:start)";
        $db = new db();
        // Connect
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':title', $title);
        $stmt->bindValue(':start', $start);

        $stmt->execute();
        $count = $stmt->rowCount();
        $db = null;

        $data = array(
            "status" => "success",
            "rowcount" =>$count,
            "title" => $title,
            "start" => $start,
        );
        echo json_encode($data);
    } catch (PDOException $e) {
        $data = array(
            "status" => "fail"
        );
        echo json_encode($data);
    }
});

// API POST EVENT 3
$app->post('/api/event3', function (Request $request, Response $response, array $args) {
    $title = $_POST["title"];
    $start = $_POST["start"];

    try {
        $sql = "INSERT INTO event3 (title,start) VALUES (:title,:start)";
        $db = new db();
        // Connect
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':title', $title);
        $stmt->bindValue(':start', $start);

        $stmt->execute();
        $count = $stmt->rowCount();
        $db = null;

        $data = array(
            "status" => "success",
            "rowcount" =>$count,
            "title" => $title,
            "start" => $start,
        );
        echo json_encode($data);
    } catch (PDOException $e) {
        $data = array(
            "status" => "fail"
        );
        echo json_encode($data);
    }
});



$app->run();




