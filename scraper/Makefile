IMG=zachlatta/incline-scraper

.PHONY: build push

build:
	docker build -t $(IMG) .

push: build
	docker push $(IMG)
