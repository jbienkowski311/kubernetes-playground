###############################
# Builder
###############################
FROM golang:1.11-alpine3.8 as builder

RUN apk add --no-cache git make \
    && go get -u github.com/golang/dep/cmd/dep

WORKDIR /go/src/app

COPY . .

RUN make

###############################
# App
###############################
FROM alpine:3.8

WORKDIR /app

COPY --from=builder /go/src/app/sub .

ENTRYPOINT ./sub

EXPOSE 8080