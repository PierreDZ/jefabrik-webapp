<template>
  <div class="login">
      <section class="background-img"></section>
      <section class="log">
          <div class="inner-log">
              <p>Let's get started</p>
              <div class="inner-btn">
                <button>
                    <IconifyIcon :icon="icons.googleIcon" :style="{fontSize: '24px'}" />
                    Log in with Google
                </button>
                <button>
                    <IconifyIcon :icon="icons.facebookIcon" :style="{color: '#ffffff', fontSize: '24px'}" />
                    Log in with Facebook
                </button>
              </div>
              <form>
                  <label for="email">Email adress</label>
                  <input type="mail" name="email" id="email" required>
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" required>
                  <button type="submit">Log In</button>
              </form>
          </div>
      </section>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue';
import googleIcon from '@iconify/icons-flat-color-icons/google';
import facebookIcon from '@iconify/icons-la/facebook';

export default {
    name: 'Login',
    components: {
        IconifyIcon
    },
    data() {
		return {
			icons: {
				googleIcon,
                facebookIcon
			},
		};
	},
    methods: {
       
    }
}
</script>

<style lang="scss">

    .login {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .background-img {
            background-color: rgba(38, 206, 131, 1);
        }

        .log {
            width: 80%;
            justify-self: center;
            text-align: left;

            .inner-log {
                display: flex;
                flex-direction: column;

                p {
                    margin-top: 156px;
                    margin-bottom: 50px;
                    color: black;
                    font-size: 36px;
                    font-weight: bold;
                }

                .inner-btn {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 50px;

                    button {
                        display: inline-block;
                        vertical-align: middle;
                        border: none;
                        border-radius: 10px;
                        width: 222px;
                        height: 46px;
                        line-height: 3;
                        cursor: pointer;
                        transition: all 0.3s ease-in-out;

                        svg {

                            vertical-align: middle;
                        }
                    }

                    button:nth-child(1) {
                        border: 1px solid #E5E5E5;

                        &:hover {
                            background-color: #E5E5E5;
                        }
                    }

                    button:nth-child(2) {
                        background-color: #527BCB;
                        color: white;

                        &:hover {
                        background-color: #476bb3;
                        }
                    }
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
                        border: none;
                        background-color: #26ce83;
                        color: white;
                        font-size: 18px;
                        transition: all 0.3s ease-in-out;

                        &:hover {
                            border: 1px solid #26ce83;
                            background-color: white;
                            color: #26ce83;
                        }
                    }
                }
            }
        }
    }

</style>