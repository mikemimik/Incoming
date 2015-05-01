define mysql::db::drop ($dbname = $title) {
  exec { "mysql::db::drop_${dbname}":
    command => "mysql -uroot -p${mysql::root_password} -e \"DROP DATABASE IF EXISTS ${dbname}\"",
    path    => $mysql::bin,
    require => Exec['mysql::set_root_password'],
  }
}