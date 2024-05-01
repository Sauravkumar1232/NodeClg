<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <h1>Going to apply v-model</h1>
      <input
        type="text"
        class="form-control"
        v-model="principle"
        placeholder="Enter "
      />
      <input
        type="text"
        class="form-control"
        v-model="rate"
        placeholder="Enter "
      />
      <input
        type="text"
        class="form-control"
        v-model="time"
        placeholder="Enter "
      />
      <input id="btn" type="button" value="Click" @click="calculate()" />
      <h1>Name - {{ name }}</h1>
      <h1>Principle - {{ principle }}</h1>
      <h1>Rate - {{ rate }}</h1>
      <h1>Time - {{ time }}</h1>

      <h1>Simple intreset - {{ result }}</h1>
    </body>
  </html>
</template>
<script>
export default {
  name: "MyModel",
  data() {
    return {
      principle: 0,
      rate: 0,
      time: 0,
      result: 0,
    };
  },
  methods: {
    calculate() {
      this.result = this.principle * this.rate * this.time;
    },
  },
};
</script>

<style scoped></style>
