<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateContentHasCategoryTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('content_has_category', function(Blueprint $table)
		{
			$table->integer('content_id')->index('fk_content_has_category_content1_idx');
			$table->integer('category_id');
			$table->primary(['content_id','category_id']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('content_has_category');
	}

}
