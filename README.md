# Kubernetes Demo

This repo is a playground for simple Kubernetes project. It uses Helm Charts to deploy and manage Kubernetes configuration files.

**This project is far from being ready for production!**

## Microservices

The microservices are written in different languages. They do depend on each other to demonstrate more complex infrastructure.

* `calc` (NodeJS) - is a REST API that supports: addition, subtraction, multiplication and division of two integers
* `add` (Golang) - is a microservice that provides API for addition of two integers
* `sub` (Golang) - is a microservice that provides API for subtraction of two integers
* `mul` (Python 3.x) - is a microservice that provides API for multiplication of two integers
* `div` (Python 3.x) - is a microservice that provides API for division of two integers

## Infrastructure

There are 5 microservices in total: 1 public and 4 internal. The `calc` microservice acts as API Gateway and uses other services to provide a result to given mathematical equation.

## Setup

This project requires `kubectl`, `minikube` and `helm`.

1. `minikube create`/`minikube start`
2. `eval $(minikube docker-env)`
3. `docker-compose build`
4. `minikube addons enable ingress`
5. `chmod a+x deploy.sh`
6. `./deploy.sh`

## Test

```
API=$(minikube ip)
curl "https://$API/" --insecure
curl "https://$API/add/2/3" --insecure
curl "https://$API/add/3/2" --insecure
curl "https://$API/sub/12/4" --insecure
curl "https://$API/mul/4/2" --insecure
curl "https://$API/mul/19/18" --insecure
curl "https://$API/div/10/5" --insecure
curl "https://$API/div/10/4" --insecure
```