<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNavigationTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('navigation', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('name');
			$table->integer('parent_id')->nullable()->default(0);
			$table->integer('sorting')->default(0);
			$table->string('point_url')->nullable();
			$table->integer('point_type')->comment('1 - 单页
2 - 列表
3 - 外链');
			$table->integer('point_content_id')->nullable()->index('fk_navigation_content1');
			$table->integer('point_category_id')->nullable()->index('fk_navigation_category1');
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
		Schema::drop('navigation');
	}

}
