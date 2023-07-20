CURRENT_DIR=$(patsubst %/,%,$(dir $(realpath $(firstword $(MAKEFILE_LIST)))))
ROOT_DIR=$(CURRENT_DIR)
CURRENT_USER=
DOCKER_NAME=encrypt-words-back
DOCKER_COMPOSE?=docker-compose
DOCKER_EXEC_TOOLS_APP=$(CURRENT_USER) docker exec -it $(DOCKER_NAME) sh
NODE_INSTALL="npm i"
SERVER_RUN="npm run dev"

.PHONY: build install dev up start first stop restart clear

build:
	$(DOCKER_COMPOSE) up --build --no-recreate -d

install:
	$(DOCKER_EXEC_TOOLS_APP) -c $(NODE_INSTALL)

dev:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_RUN)

up:
	$(DOCKER_COMPOSE) up -d

start: up dev

first: build install dev

stop: $(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) kill || true
	$(DOCKER_COMPOSE) rm --force || true


restart: stop start dev


clear: stop $(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) down -v --remove-orphans || true