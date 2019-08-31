from fabric import task


@task
def deploy(c):
    c.put("build.tar.gz", "/var/www/mdian_com/")
    with c.cd("/var/www/mdian_com/"):
        c.run("tar zxf build.tar.gz")
        c.run("rm build.tar.gz")
