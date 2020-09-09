import Vue from "vue"

export default Vue.extend({
  name: "Login",
  data() {
    return {
      focusName: "",
      phone: "",
    }
  },
  methods: {
    // 手机号码输入操作
    handlePhoneChange(event) {
      this.phone = event.target.value
    },
    handleCodeChange(event) {

    },
    handleInputFocus(key) {
      
    }
  },
  render() {
    const {

    } = this.$data

    return (
      <div></div>
    )
  }
})