<template>
<div class="wrap4">
  <b-container class="login_inner_wrap">
    <article class="half">
      <h1>곶감</h1>
      <div class="content">
          <b-tabs fill>
            <b-tab title="tab signin" active>
              <div class="signin-cont cont">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
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

                  <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                    <b-form-select
                      id="input-3"
                      v-model="form.food"
                      :options="foods"
                      required
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group id="input-group-4">
                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                      <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
              </div>
            </b-tab>
            <b-tab title="tab signup">
              <div class="signup-cont cont">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
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

                  <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                    <b-form-select
                      id="input-3"
                      v-model="form.food"
                      :options="foods"
                      required
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group id="input-group-4">
                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                      <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
              </div>
            </b-tab>
          </b-tabs>
      </div>
    </article>
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
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
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
    height: 35rem;
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
    padding: 4rem 7rem;
    float: left;
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

  .login_inner_wrap h1 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 23px;
    text-align: center;
    text-indent: 6px;
    letter-spacing: 7px;
    text-transform: uppercase;
    color: #263238;
  }

  .login_inner_wrap .tabs {
    width: 100%;
    margin-bottom: 29px;
    border-bottom: 1px solid #d9d9d9;
  }

  .login_inner_wrap .tabs .tab {
    display: inline-block;
    margin-bottom: -1px;
    padding: 20px 15px 10px;
    cursor: pointer;
    letter-spacing: 0;
    border-bottom: 1px solid #d9d9d9;
    user-select: none;
    transition: all 0.1s ease-in-out;
  }

  .login_inner_wrap .tabs .tab a {
    font-size: 11px;
    text-decoration: none;
    text-transform: uppercase;
    color: #d9d9d9;
    transition: all 0.1s ease-in-out;
  }

  .login_inner_wrap .tabs .tab.active a,
  .login_inner_wrap .tabs .tab:hover a {
    color: #263238;
  }

  .login_inner_wrap .tabs .tab.active {
    border-bottom: 1px solid #263238;
  }

  .login_inner_wrap .content form {
    position: relative;
  }

  .login_inner_wrap .content label:first-of-type,
  .login_inner_wrap .content input:first-of-type,
  .login_inner_wrap .content .more:first-of-type {
    animation: slideIn 0.4s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  .login_inner_wrap .content label:nth-of-type(2),
  .login_inner_wrap .content input:nth-of-type(2),
  .login_inner_wrap .content .more:nth-of-type(2) {
    animation: slideIn 0.5s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  .login_inner_wrap .content label:nth-of-type(3),
  .login_inner_wrap .content input:nth-of-type(3),
  .login_inner_wrap .content .more:nth-of-type(3) {
    animation: slideIn 0.6s cubic-bezier(0.37, 0.82, 0.2, 1);
  }

  .login_inner_wrap .content label:nth-of-type(4),
  .login_inner_wrap .content input:nth-of-type(4),
  .login_inner_wrap .content .more:nth-of-type(3) {
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

  .credits {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    color: #999999;
    font-size: 14px;
    margin: 0 10px 10px 0;
  }

  .credits a {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
    opacity: 0.8;
    color: inherit;
    font-weight: 700;
    text-decoration: none;
  }
</style>