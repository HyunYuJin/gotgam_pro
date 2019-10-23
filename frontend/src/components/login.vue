<template>
<div class="wrap4">
  <b-container class="login_inner_wrap">
    <div class="half">
      <h4>곶감</h4>
      <div class="content">
          <b-tabs fill>
            <b-tab title="Sign In" active>
              <div class="cont">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.password"
                      required
                      placeholder="Enter Password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-4">
                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                      <b-form-checkbox value="me">Remember me</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Sign In</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
              </div>
            </b-tab>

            <b-tab title="Sign Up">
              <div class="cont">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Your password:" label-for="input-3">
                    <b-form-input
                      id="input-3"
                      v-model="form.password"
                      required
                      placeholder="Enter Password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Your password check:" label-for="input-4">
                    <b-form-input
                      id="input-4"
                      v-model="form.passwordchk"
                      required
                      placeholder="Password check"
                    ></b-form-input>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Sign Up</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
              </div>
            </b-tab>
          </b-tabs>
      </div>
    </div>
    <div class="half bg">
      <img src="../assets/back.jpg" />
    </div>
  </b-container>
</div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
          passwordchk: '',
          checked: []
        },

        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
  .wrap4 {
    /* max-width: 800px; */
    width: 100%;
    margin: 0 auto;
    padding: 3.4rem 0;
    box-sizing: border-box;
    position: relative;
  }

  .login_inner_wrap {
    height: 40rem;
    position: relative;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
    padding: 0;
  }

  .login_inner_wrap::after { 
    content: ''; 
    display: table; 
    clear: both; 
  }

  .login_inner_wrap .half {
    width: 60%;
    height: 100%;
    float: left;
  }

  .content {
    padding: 2rem 7rem 1.5rem;
  }

  .login_inner_wrap .half.bg {
    width: 40%;
    padding: 0;
    float: left;
  }
  
  .login_inner_wrap .half.bg img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .login_inner_wrap h4 {
    font-weight: 700;
    padding-top: 2rem;
    text-align: center;
    color: #263238;
  }

  .login_inner_wrap .tabs .tab {
    display: inline-block;
    margin-bottom: -1px;
    padding: 20px 15px 10px;
    cursor: pointer;
    letter-spacing: 0;
    border-bottom: 1px solid #d9d9d9;
    transition: all 0.1s ease-in-out;
  }

  .cont {
    padding-top: 3rem;
  }

  .login_inner_wrap .content form {
    position: relative;
  }

  .login_inner_wrap .content label:first-of-type,
  .login_inner_wrap .content input:first-of-type{
    animation: slideIn 0.4s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  .login_inner_wrap .content label:nth-of-type(2),
  .login_inner_wrap .content input:nth-of-type(2){
    animation: slideIn 0.5s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  .login_inner_wrap .content label:nth-of-type(3),
  .login_inner_wrap .content input:nth-of-type(3) {
    animation: slideIn 0.6s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  .login_inner_wrap .content label:nth-of-type(4),
  .login_inner_wrap .content input:nth-of-type(4) {
    animation: slideIn 0.7s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  @keyframes slideIn {
    0% {
      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
      opacity: 0;
      margin-left: -320px;
    }

    100% {
      filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
      opacity: 1;
      margin-left: 0px;
    }
  }

  @-webkit-keyframes slideIn {
    0% {
      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
      opacity: 0;
      margin-left: -320px;
    }

    100% {
      filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
      opacity: 1;
      margin-left: 0px;
    }
  }
</style>