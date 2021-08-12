<template>
    <div class="login">
      <section class="background-img"></section>
      <section class="log">
          <div class="inner-log">
              <p>Let's get started</p>
              <form @submit="checkForm">
                  <label for="email">Email adress</label>
                  <input type="mail" name="email">
                  <label for="password">Password</label>
                  <input type="password" name="password">
                  <button type="submit" @click="loginIn">Log In</button>
              </form>
          </div>
      </section>
    </div>
</template>

<script>

export default {
    name: 'Login',
    methods: {
        checkForm (e) {
        e.preventDefault();
        },
        loginIn () {
        this.$router.push('Dashboard');
        }
  }
}
</script>

<style lang="scss" scoped>
 .login {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);

    .background-img {
        background-color: rgba(38, 206, 131, 1);
    }

    .log {
        width: 80%;
        height: 80%;
        justify-self: center;
        align-self: center;
        text-align: left;

        .inner-log {
            display: flex;
            flex-direction: column;

            p {
                margin: 50px 0;
                color: black;
                font-size: 36px;
                font-weight: bold;
            }

            form {
                display: flex;
                flex-direction: column;

                input {
                    height: 64px;
                    border-radius: 10px;
                    border: 1px solid #C8C8C8;
                    margin-bottom: 50px;
                    outline: none;
                    font-size: 18px;
                    padding: 0 20px;

                    &:focus,
                    &:hover {
                        border-color: #26ce83;
                    }
                }

                button {
                    cursor: pointer;
                    height: 64px;
                    border-radius: 10px;
                    border: 1px solid #26ce83;
                    background-color: transparent;
                    color: #26ce83;
                    font-size: 18px;
                    transition: all 0.3s ease-in-out;

                    &:hover {
                        background-color: #26ce83;
                        color: white;
                    }
                }
            }
        }
    }
}
</style>
