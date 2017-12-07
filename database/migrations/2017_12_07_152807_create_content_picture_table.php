<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateContentPictureTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('content_picture', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('title', 128);
			$table->string('point_url')->nullable();
			$table->integer('point_type');
			$table->integer('point_category_id')->nullable();
			$table->integer('point_content_id')->nullable();
			$table->string('assets_url');
			$table->text('description', 65535)->nullable();
			$table->softDeletes();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('content_picture');
	}

}
