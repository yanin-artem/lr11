<?php
require_once "tableModule.php";

class Group extends TableModule
{
	protected function getTableName(): string
	{
		return "groups";
	}
}