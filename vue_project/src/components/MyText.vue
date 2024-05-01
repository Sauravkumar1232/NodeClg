<template>
  <h1 v-if="check">{{ heading }}</h1>
  <p v-else>{{ subHeading }}</p>
  <h2>Sum {{ a + b }}</h2>
  <h2>Sum from function {{ z }}</h2>

  <h2>{{ students[0] }}</h2>

  <h1 v-for="(student, index) in students" :key="index">
    {{ student.name }} - {{ student.gender }}
  </h1>
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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Roll No</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ student.name }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.rollNo }}</td>
          </tr>
          <!-- <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr> -->
        </tbody>
      </table>
    </body>
  </html>

  <input type="button" value="Click" @click="add()" />
</template>

<script>
export default {
  name: "MyText",
  data() {
    return {
      heading: "Welcome to Bharat",
      subHeading: "Welcome to UP",
      check: true,
      a: 5,
      b: 4,
      z: 0,
      peoples: ["ram", "mohan", "gettaa"],
      students: [
        {
          name: "Mustakeem",
          rollNo: 32,
          gender: "Male",
        },
        {
          name: "Salma",
          rollNo: 32,
          gender: "Male",
        },
        {
          name: "maaz",
          rollNo: 30,
          gender: "Male",
        },
      ],
      // result : a+b
    };
  },
  methods: {
    add() {
      //    alert ('ClickMe')
      this.z = this.a + this.b;
      this.heading = "RD";
    },
  },
};
</script>

<style scoped>
h1 {
  color: rgb(223, 222, 239) d;
}
#btn {
  color: rgb(83, 79, 133);
}
</style>
