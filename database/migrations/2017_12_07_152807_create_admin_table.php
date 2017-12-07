<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAdminTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('admin', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('name', 191);
			$table->string('remember_token', 100)->nullable();
			$table->string('password', 191);
			$table->string('password_reset_token')->nullable()->unique('password_reset_token');
			$table->string('email', 191)->unique('email');
			$table->timestamps();
			$table->integer('is_deleted')->default(0);
			$table->string('username', 191)->unique('username_UNIQUE')->comment('用户名');
			$table->string('mobile', 191)->nullable()->comment('电话号码');
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
		Schema::drop('admin');
	}

}
