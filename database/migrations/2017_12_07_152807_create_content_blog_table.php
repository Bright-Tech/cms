<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateContentBlogTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('content_blog', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('title');
			$table->string('sub_title')->nullable();
			$table->text('content', 65535);
			$table->string('intro_image')->nullable()->index('fk_content_blog_assets1_idx');
			$table->softDeletes()->comment('1-blog
2-picture');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('content_blog');
	}

}
