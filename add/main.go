package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"strings"
)

type Response struct {
	Result int64 `json:"result"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	params := strings.Split(r.URL.Path, "/")
	if len(params) != 4 {
		code := http.StatusUnprocessableEntity
		http.Error(w, http.StatusText(code), code)
		return
	}

	// TODO: Some more error handling in here would be nice
	a, _ := strconv.ParseInt(params[2], 0, 64)
	b, _ := strconv.ParseInt(params[3], 0, 64)
	res, _ := json.Marshal(Response{Result: a + b})

	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func main() {
	http.HandleFunc("/add/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
