USE_PIPENV ?= true


pipenv = PIPENV_IGNORE_VIRTUALENVS=1 PIPENV_DEV=1 pipenv
ifeq ($(USE_PIPENV), true)
	run = $(pipenv) run --
else
	run =
endif

.PHONY: install
install: ## dev packages install
install:
	$(pipenv) clean
	$(pipenv) sync

.PHONY: shell
shell:
	$(pipenv) shell

.PHONY: fix-lint
fix-lint: ## trying to fix any lint issues detected
fix-lint:
	$(run) isort .
	$(run) black .

.PHONY: requirements-file
requirements-file: ## creates requirements file for pip
requirements-file:
	# $(pipenv) lock -r > requirements.txt
	$(pipenv) run pip freeze > requirements.txt


# 	.PHONY: run-server
# run-server:  ## run the server
# run-server:
# 	uvicorn --factory atlas.web.app:create_app --host 0.0.0.0 --port 9001