<!-- <template>
    <div>
      <h1>Hello, {{ name }}!</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      message: String
    }
  };
  </script> -->

  <template>
    <div>
      <h1>Hello, {{ name }}!</h1>
      <p>{{ message }}</p>
      <p>{{ age }} years old</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      message: {
        type: String,
        default: "This is a default message"
      },
      age: {
        type: Number,
        default: 25
      }
    }
  };
  </script>