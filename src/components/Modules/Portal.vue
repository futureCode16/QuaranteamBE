<template>
  <div style="margin-top: 20%;">
      <p class="text-center">test</p>
  </div>
</template>

<script>
export default {
  name: "Portal",
  data() {
    return {
      absolute: true,
      opacity: 1,
      overlay: false,
      alignment: "center",
      dense: false,
      justify: "center",
      user: [
        {
          title: "Student",
          login: "Login",
          color: "orange",
        },
        {
          title: "Admin",
          login: "Login",
          register: "Register",
          color: "blue",
        }
      ]
    };
  }
};
</script>