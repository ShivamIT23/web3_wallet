package main

import (
	"backend/sendMail"
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {

	fs := http.FileServer(http.Dir("image/"))

	http.Handle("/getImage/", http.StripPrefix("/getImage/", fs))

	http.HandleFunc(("/"), func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Hello")
		testing()
		fmt.Fprint(w, "World")
	})

	http.HandleFunc(("/send-mail"), func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Sending Mail")
		sendMail.SendMailFunc("shivam.gupta.23112003@gmail.com", "Mail By Wallet Guardian", "<strong>testing mail</strong>")
		fmt.Fprint(w, "Mail Sent")
	})

	http.HandleFunc(("/send-otp"), func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Sending OTP")
		sendMail.SendOTPFunc("shivam.gupta.23112003@gmail.com", "1234")
		fmt.Fprint(w, "OTP Sent")
	})

	fmt.Println("server is running on 8005")

	log.Fatal(http.ListenAndServe(":8005", nil))

}

func testing() {
	res, err := http.Get("https://wallet-test.shivam23.me/")

	if err != nil {
		fmt.Println("There was an error during fetching itself")
	}

	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)

	if err != nil {
		fmt.Printf("error in res body")
	} else {

		fmt.Print(string(body))
	}
}
