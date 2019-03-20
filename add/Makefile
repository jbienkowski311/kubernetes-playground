BINARY_NAME=add

all: build

build:
	dep ensure
	GOOS=linux GOARCH=amd64 go build -o ${BINARY_NAME}
