<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateContentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('contents', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('contenttable_type')->comment('1-文章，2-图片');
			$table->string('keywords')->nullable();
			$table->timestamps();
			$table->softDeletes()->comment('1-blog
2-picture');
			$table->integer('author')->index('fk_contents_admin1_idx');
			$table->text('categories_str', 65535)->index('categories');
			$table->integer('contenttable_id');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('contents');
	}

}
