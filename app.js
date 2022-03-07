class App {
  constructor(){
    this.$form = document.querySelector("#form")
  }

  addEventListeners(){
    document.body.addEventListener("click", event => {
      handleFormClick(event)
    })
  }

  handleFormClick(event){
    const isFormClicked = this.$form.contains(event.target)
  }
}

new App()