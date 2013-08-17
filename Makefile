PACKAGE  = iris
NODEBIN  = ./node_modules/.bin
MOCHA    = $(NODEBIN)/mocha
JSDOC    = ./external/jsdoc/jsdoc
RJS      = $(NODEBIN)/r.js
NPM      = npm
GIT      = git

DISTDIR   = ./dist
MOCHAOPTS =
JSDOCCONF = ./conf/jsdoc.json
JSDOCDEST = $(DISTDIR)/doc/api
TESTDIR ?= test
BUILD   ?= $(DISTDIR)/app.build.js
DISTLIB ?= $(DISTDIR)/iris.js
DISTCSS ?= $(DISTDIR)/iris.css
MINIFY  ?= 1

BUILDDIR = ./build

ifeq ($(MINIFY),0)
	RJSOPTS = "optimize=none"
endif

all: test

init-npm:
	@ $(NPM) install

init-submodules:
	@ $(GIT) submodule update --init

init: init-npm init-submodules

docs:
	@ $(JSDOC) --configure $(JSDOCCONF) --destination $(JSDOCDEST)
	@ echo "Documentation written to $(JSDOCDEST)"

dist: init docs
	@ $(RJS) -o $(BUILD) out=$(DISTLIB) $(RJSOPTS)
	@ $(RJS) -o out=$(DISTCSS) cssIn=public/css/iris.css $(RJSOPTS)

build: init
	@ $(RJS) -o $(BUILD) \
		appDir=./public dir=$(BUILDDIR) baseUrl=js namespace=

test:
	@ $(MOCHA) $(MOCHAOPTS) test/client/*/*.js test/universal/*.js

clean:
	rm -rf $(DISTLIB) $(BUILDDIR) $(JSDOCDEST)

dist-clean: clean
	rm -rf node_modules/

.PHONY: test all dist