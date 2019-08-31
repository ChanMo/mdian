#!/usr/bin/env python3

import subprocess as sp


def main():
    sp.run(["yarn", "build"])
    sp.run(["tar", "zcvf", "build.tar.gz", "-C", "build", "."])
    sp.run(["fab", "-H", "md", "deploy"])
    sp.run(["rm", "build.tar.gz"])


if __name__ == "__main__":
    main()
