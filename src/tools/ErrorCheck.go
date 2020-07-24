package tools

//Check - checks for errors and panics if found any
func Check(e error) {
	if e != nil {
		// log.Println("Fatal: ")
		// log.Println(e)
		panic(e)
	}
}
