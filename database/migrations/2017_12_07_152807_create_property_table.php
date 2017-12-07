<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePropertyTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('property', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('type');
			$table->string('key');
			$table->text('value', 65535);
			$table->string('label')->default('');
			$table->string('description')->default('');
			$table->integer('sort')->default(0);
			$table->timestamps();
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
		Schema::drop('property');
	}

}
