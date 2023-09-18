<?php
require_once '../vendor/autoload.php';
require_once "../classes/group.php";
require_once "../classes/students.php";
$app = new Silex\Application();
header("Access-Control-Allow-Origin: *");

$app->get('/groups/list.json', function () use ($app){
	$cur_group = new Group;
	$list = $cur_group->read();
	return $app->json($list);
});

$app->post('/groups/add-item', function () use ($app){
	if (strlen($_POST['group'])) {
        $input = json_decode($_POST['group'],true);
		$group_name = $input['group_name'];
        $cur_group = new Group;
		try {
            $cur_group->create(array("group_name" => $group_name));
			$lastid = $cur_group->lastID();
			return $app->json(array("create-group" => "yes", "create-id" => $lastid));
		} catch (PDOException $e) {
			return $app->json(array("error" => $e->getMessage(), "create-group" => "no"));
		}
	} else {
		return $app->json(array("create-group" => "no"));
	}
});
$app->post('/groups/update-item', function ()use ($app) {
    $cur_group = new group;
    $input = json_decode($_POST['group'],true);
	$group_name = $input['group_name'];
    $id = $input['group_id'];
	if ($cur_group->exists($id) && strlen($group_name)) {
		try {
            $cur_group->update(array("group_id" => $id, "group_name" => $group_name));
			return $app->json(array("update-group" => "yes", "id_update" => $id));
		} catch (PDOException $e) {
			return $app->json(array("error" => $e->getMessage(), "update-group" => "no"));
		}
	} else {
		return $app->json(array("update-group" => "no"));
	}
});

$app->post('/groups/delete-item', function ()use ($app) {
    $cur_group = new Group;
    $input = json_decode($_POST['group'],true);
    $id = $input["id"];
	if ($cur_group->exists($id)) {
		try {
            $cur_group->delete($id);
			return $app->json(array("delete-group" => "yes", "id_delete" => $id));
		} catch (PDOException $e) {
			return $app->json(array("error" => $e->getMessage(), "delete-group" => "no"));
		}
	} else {
		return $app->json(array("delete-group" => "no"));
	}
});

$app->get('/students/list.json', function () use ($app){
	$cur_students = new students;
	$list = $cur_students->read();
	return $app->json($list);
});

$app->post('/students/add-item', function () use ($app) {
    $input = json_decode($_POST['students'],true);
	$name_students = $input["name"];
    $surname_students = $input["surname"];
    $cost_students = $input["year"];
    $group_id = $input["group_name"];
    $cur_group = new Group;
	if (strlen($name_students) && $cur_group->exists($group_id)) {
        $cur_students = new students;
		try {
            $cur_students->create(
                array('name' => $name_students,
                    "surname" => $surname_students,
                    "year" => $cost_students,
                    "group_id" => $group_id
                )
            );
			$lastid = $cur_students->lastID();
			return $app->json(array("create-students" => "yes", "create-id" => $lastid));
		} catch (PDOException $e) {
			return $app->json(array("error" => $e->getMessage(), "create-students" => "no"));
		}
	} else {
		return $app->json(array("create-students" => "no"));
	}
});
$app->post('/students/update-item', function () use ($app){

    $input = json_decode($_POST['students'],true);
	$id = $input["id"];
    $name_students = $input["name"];
    $surname_students = $input["surname"];
    $cost_students = $input["year"];
    $students_id = $input["group_name"];
    $cur_students = new students;

	if ($cur_students->exists($id) && strlen($name_students)) {
		try {
            $cur_students->update(
                array(
                    "id" => $id,
                    "name" => $name_students,
                    "surname" => $surname_students,
                    "year" => $cost_students,
                    "group_id" => $students_id
                )
            );
			return $app->json(array("update-students" => "yes", "id_update" => $id));
		} catch (PDOException $e) {
			return $app->json(array("error" => $e->getMessage(), "update-students" => "no"));
		}
	} else {
		return $app->json(array("update-students" => "no"));
	}
});

$app->post('/students/delete-item', function () use ($app) {

	$id = intval($_POST['id']);
    $cur_students = new students;

	if ($cur_students->exists($id)) {
		try {
            $cur_students->delete($id);
			return $app->json(array("delete-students" => "yes", "id_delete" => $id));
		} catch (PDOException $e) {
			return $app->json(array("error" => $e->getMessage(), "delete-students" => "no"));
		}
	} else {
		return $app->json(array("delete-students" => "no"));
	}
});

$app->post('/students/list-filtred.json', function () use ($app){
    $cur_students = new students;
    $id = intval($_POST['id']);
    $list = $cur_students->filter($id);
    return $app->json($list);
});

$app->run();