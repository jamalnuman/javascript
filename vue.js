// <!-- <div> -->

//   <!-- the following are examples of event modifiers:
//    <div id="canvas" v-on:mousemove.capture="updateXY">{{ x }} , {{ y }}</div>
//     <p><a v-on:click.prevent="click" href="http://www.thenetninja.co.uk">The Net Ninja</a></p> 
//   -->

//   <!-- you can also have event modifiers for keyboard presses: 
//   <h1>Keyboard Events</h1>
//     <label>Name:</label>
//     <input type="text" v-on:keyup.enter="logName" /> now this function will execute when the enter button is hit
//     <label>Age:</label>
//     <input type="text" v-on:keyup.alt.enter="logAge" /> this function will execute with the alt AND enter button is hit
//   -->

//   <!-- you can also display html sytax to the screen that is stored in the data hashes:
//     <p v-html="websiteTag"></p> 
//   -->

//   <!-- These are computed properties which will execute when a variable is changed. Dont really understand the importance of this too much...further research is required. 
//   <h1>Computed Properties</h1>
//    <button v-on:click="a++">Add to A</button>
//    <button v-on:click="b++">Add to B</button>
//    <p>A - {{ a }}</p>
//    <p>B - {{ b }}</p>
//    <p>Age + A = {{ addToA }}</p> computed properties are called without the "()"
//    <p>Age + B = {{ addToB }}</p> computed properties are called without the "()"
//    <button v-on:click="nearby = !nearby">Toggle nearby</button> easy way to toggle the value of the nearby data attribute
//    <button v-on:click="available = !available">Toggle available</button> easy way to toggle the value of the available data attribute
//  -->

//  <!-- the difference btw v-if and v-show...when using v-if, if the class is false, the class will not display at all in the html, but with v-show..the html class will be displayed and have an attribute of "display = none"
//  <button v-on:click="error = !error">Toggle error</button>
//  <button v-on:click="success = !success">Toggle success</button>
//  <p v-if="error" class="error">There has been an error</p>
//  <p v-else-if="success" class="success">Whooo, success :)</p>
//  <p v-show="error" class="error">There has been an error</p>
//  <p v-show="success" class="success">Whooo, success :)</p>
//   -->
  
//  <!--this to access the index in a loop 
//  <ul>
//   <li v-for="(ninja, index) in ninjas">{{ index }} . {{ ninja.name }} - {{ ninja.age }}</li>
//  </ul> 
//  -->

//  <!-- this is using 'template' which prevents the markup in html. if you want each individual template to show in the html, then use <div> tags 
//  <template v-for="ninja in ninjas">
//   <div v-for="(val, key) in ninja"> this is when u dont know the name of the key and value in the loop. the name of the key will be printed and the name of the value will be printed along with the individual element in the loop
//     <p>{{key}} - {{ val }}</p>
//   </div>
//  </template> 
//  -->

//  <!-- lesson 14 Mulitple Vue Instance 

//   var one = new Vue({       controlling a div on App.vue.IMPORTANT THAT THEY ARE SAVED IN A VARIABLE
//       el: '#vue-app-one',
//       data: {
//         title: 'Vue App One'
//       },
//       computed: {
//         greet: function(){
//           return 'Hello, from app one :)';
//         }
//       }
//   });

//   var two = new Vue({
//       el: '#vue-app-two',
//       data: {
//         title: 'Vue App Two'
//       },
//       computed: {
//         greet: function(){
//           return 'Yo dudes, this is app 2 speaking to ya';
//         }
//       },
//       methods: {
//         changeTitle: function(){
//           one.title = 'Title Changed'; variable of 1st instance is called to change one of it's properties.
//         }
//       }
//   });

//   two.title = 'Changed from outside';

//   <body>
//     <h1>Multiple Vue instances</h1>

//     <div id="vue-app-one">
//       <h2>{{ title }}</h2>
//       <p>{{ greet }}</p>
//     </div>

//     <div id="vue-app-two">
//       <h2>{{ title }}</h2>
//       <p>{{ greet }}</p>
//       <button v-on:click="changeTitle">Change App One Title</button>
//     </div>

// </body>
//  -->

//  <!-- Lesson 15 Intro to Components 
//   Vue.component('greeting', {
//       template: '<p>Hey there, I am a re-usable component</p>'
//   }); component takes two arguments, the first is the name of the component, which is used to render the component on a different page (see below). the second argument is an option which renders a template that will displayed when the component is called upon

//   -in the component, "data" is a function that returns a function. this way, the data returned will be different for each instance of this component. but if 'data' was an object and not a function, then the data returned would be the same for each instance of this component. 

//   /* new Vue({
//       el: '.test',
//       template: '<p>I am a template</p>'
//   }); */

//   new Vue({
//       el: '#vue-app-one'
//   });

//   new Vue({
//       el: '#vue-app-two'
//   });
  

//   <body>
//      <h1>Templates</h1>

//      <div id="vue-app-one">
//        <h1>Vue App One</h1>
//        <greeting></greeting> since this is not an html tag, Vue is smart enough to know this is component.  
//      </div>

//      <div id="vue-app-two">
//        <h1>Vue App Two</h1>
//        <greeting></greeting>
//      </div>

//      <div class="test"></div>
//      <div class="test"></div>
//   </body> 
// -->

// <!-- Lesson 16 - Referencing with $refs

//   new Vue({
//     el: '#vue-app-one',
//     data: {
//       output: 'Your favourite food'
//     },
//     methods: {
//       readRefs: function(){
//         this.output = this.$refs.input.value;
//     }
//   }
// });

//   -this.$refs will give us access to ALL the refs on a page. the .input is referring to the name of the ref within the <div> below. the .value is referring to one of the many properties from the 'event' object in the DOM.

//   <body>
//     <h1>Refs</h1>

//     <div id="vue-app-one">
//       <input type="text" ref="input"/>
//         the 'ref' tag is needed and the name of it can be whatever. now it can be accessed in the Vue instance above
//       <button v-on:click="readRefs">Submit</button>
//       <p>{{ output }}</p>
//     </div>

//   </body>
// -->

// <!-- Lesson 19 - Importing and Nesting Components

//   APP.VUE -  THIS IS THE MOTHER (ROOT) COMPONENT
//   <template>
//     <div>
//       <h1>{{ title }}</h1>
//       <ninjas></ninjas>
//     </div>
//   </template>

//   <script>
//   import Ninjas from './Ninjas.vue';

//   export default {
//     THIS NINJAS COMPONENT IS REGISTERED LOCALLY AND CAN ONLY BE USED IN THIS VUE..BEING CALLED ABOVE
//     components: {
//       'ninjas': Ninjas
//     },
//     data () {
//       return {
//         title: 'Ninja App'
//       }
//     }
//   }
//   </script>

//   NINJAS.VUE
//   <template>
//     <ul>
//       <li v-for="ninja in ninjas">{{ ninja }}</li>
//     </ul>
//   </template>

//   <script>
//   export default {
//     data () {
//       return {
//         ninjas: ['Yoshi', 'Mario', 'Ryu']
//       }
//     }
//   }
//   </script>
//  -->

//  <!-- Lesson 21 - Components Example STYLES ARE NOT INCLUDED
//   APP.VUE
//   <template>
//     <div>
//       <app-header></app-header>
//       <app-ninjas></app-ninjas>
//       <app-footer></app-footer>
//     </div>
//   </template>

//   <script>
//   import Header from './components/Header.vue';
//   import Footer from './components/Footer.vue';
//   import Ninjas from './components/Ninjas.vue';
//   export default {
//     components: { Registering coponents, locally not globally
//       'app-header': Header,
//       'app-footer': Footer,
//       'app-ninjas': Ninjas
//     },
//     data () {
//       return {
//       }
//     }
//   }
//   </script>

//   HEADER COMPONENT
//   <template>
//     <header> header is the root tag, not a <div> property cause this is the header component
//       <h1>{{ title }}</h1>
//     </header>
//   </template>
//   <script>
//   export default {
//     data(){
//       return{
//         title: 'Vue Ninjas'
//       }
//     }
//   }
//   </script>

//   NINJA COMPONENT
//   <template>
//     <div id="ninjas">
//       <ul>
//         <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
//           <h2>{{ ninja.name }}</h2>
//           <h3 v-show="ninja.show">{{ ninja.speciality }}</h3> v-show will show depending on the boolean that is nested inside the ninja.show property
//         </li>
//       </ul>
//     </div>
// </template>
// <script>
// export default {
//   data(){
//     return{
//       ninjas: [ 'show' is initially set to false, but can be toggle with the on:click above
//         {name: 'Ryu', speciality: 'Vue Components', show: false},
//         {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
//         {name: 'Hitoshi', speciality: 'Click Events', show: false},
//         {name: 'Tango', speciality: 'Conditionals', show: false},
//         {name: 'Kami', speciality: 'Webpack', show: false},
//         {name: 'Yoshi', speciality: 'Data Diggin', show: false}
//       ]
//     }
//   }
// }
// </script>

// FOOTER COMPONENT
// <template>
//   <footer> footer is the root tag, not a <div> property, cause this is the footer component
//     <p>{{ copyright }}</p>
//   </footer>
// </template>
// <script>
// export default {
//   data(){
//     return{
//       copyright: 'Copyright 2017 Vue Ninjas'
//     }
//   }
// }
// </script>
// -->

// <!-- Lesson 22 - Props Transfer Data from Parent to Child
//   APP.VUE (PARENT COMPONENT)
//   <template>
//     <div>
//       <app-header></app-header>
//       <app-ninjas v-bind:ninjas="ninjas"></app-ninjas> the v-bind property is in the child component
//       using the v-bind cause the array of ninjas is now in parent component and not the child component
//       <app-footer></app-footer>
//     </div>
//   </template>

//   <script>
//   import Header from './components/Header.vue';
//   import Footer from './components/Footer.vue';
//   import Ninjas from './components/Ninjas.vue';
//   export default {
//     components: {
//       'app-header': Header,
//       'app-footer': Footer,
//       'app-ninjas': Ninjas
//     },
//     data () {
//       return {
//         ninjas: [
//           {name: 'Ryu', speciality: 'Vue Components', show: false},
//           {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
//           {name: 'Hitoshi', speciality: 'Click Events', show: false},
//           {name: 'Tango', speciality: 'Conditionals', show: false},
//           {name: 'Kami', speciality: 'Webpack', show: false},
//           {name: 'Yoshi', speciality: 'Data Diggin', show: false}
//         ]
//       }
//     }
//   }
//   </script>

//   NINJA.VUE (CHILD COMPONENT)
//   <template>
//     <div id="ninjas">
//       <ul>
//         <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
//           <h2>{{ ninja.name }}</h2>
//           <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
//         </li>
//       </ul>
//     </div>
//   </template>
//   <script>
//   export default {
//     props: ['ninjas'] this is how the child component receives the data from the parent component. { 
//       ninjas: { this is for validation. ninjas becomes a hash and type has to be an Array and required is true
//         type: Array,
//         required: true
//       }
//     },
//     data(){
//       return{

//       }
//     }
//   }
//   </script>
//  -->

// <!-- Lesson 23 Primitives vs Reference Types
//   Prmitives are strings, booleans and numbers
//   Reference types are objects and arrays
//   -important to note is when the REFERENCE type is passed to the child component and then altered, the original data in the parent is also altered. Whereas, primitives, when altered in the child component, the change is not seen in the parent component. this is EXTREMELY important if the REFERENCE type is passed to several other components, cause then the other components will have their data altered. the change or alteration is not seen in the ninjas array, but it is seen in the browser. 

// APP.VUE
// <template>
//   <div>
//     <app-header v-bind:title="title"></app-header>
//     <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
//     <ul>
//       <li v-for="ninja in ninjas">{{ ninja.name }}</li>
//     </ul>
//     <app-footer v-bind:title="title"></app-footer>
//   </div>
// </template>

// <script>
// import Header from './components/Header.vue';
// import Footer from './components/Footer.vue';
// import Ninjas from './components/Ninjas.vue';
// export default {
//   components: {
//     'app-header': Header,
//     'app-footer': Footer,
//     'app-ninjas': Ninjas
//   },
//   data () {
//     return {
//       ninjas: [
//         {name: 'Ryu', speciality: 'Vue Components', show: false},
//         {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
//         {name: 'Hitoshi', speciality: 'Click Events', show: false},
//         {name: 'Tango', speciality: 'Conditionals', show: false},
//         {name: 'Kami', speciality: 'Webpack', show: false},
//         {name: 'Yoshi', speciality: 'Data Diggin', show: false}
//       ],
//       title: 'Vue Wizards' this is a primitive type
//     }
//   }
// }
// </script>

// HEADER.VUE
// <template>
//   <header>
//     <h1 v-on:click="changeTitle">{{ title }}</h1>
//   </header>
// </template>
// <script>
// export default {
//   props: { receiving the prop and doing validations
//     title: {
//       type: String,
//       required: true
//     }
//   },
//   data(){
//     return{
//     }
//   },
//   methods: {
//     changeTitle: function(){
//       this.title = 'Vue Ninjas'; cause this is a string, changing the primitive type will not alter the other components that are using this same exact component.
//     }
//   }
// }
// </script>

// NINJA.VUE
// <template>
//   <div id="ninjas">
//       <ul>
//         <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
//           <h2>{{ ninja.name }}</h2>
//           <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
//         </li>
//       </ul>
//       <button v-on:click="deleteNinja">Delete a Ninja</button> this button will alter the array in the parent, which will alter any other child component that is using the component from the parent. 
//   </div>
// </template>
// <script>
// export default {
//   props: {
//     ninjas: {
//       type: Array,
//       required: true
//     }
//   },
//   data(){
//     return{
//     }
//   },
//   methods: {
//     deleteNinja: function(){
//       this.ninjas.pop();
//     }
//   }
// }
// </script>

// FOOTER.VUE
// <template>
//   <footer>
//     <p>Copyright 2017 {{ title }}</p>
//   </footer>
// </template>
// <script>
// export default {
//   props: {
//     title: {
//       type: String,
//       required: true
//     }
//   },
//   data(){
//     return{
//     }
//   }
// }
// </script>
// -->

// <!-- Lesson 24 - Events
//   An event occurs in the child component, the parent component is listening for that specific event ($emit) and then the parent performs a specific action and re-renders it's props to the child components, which then updates the children components. similar to reference type (like arrays and objects) actions but based upon a primitive event occuring.  

// APP.VUE
// <template>
//   <div>
//     <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
//     <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
//     <ul>
//       <li v-for="ninja in ninjas">{{ ninja.name }}</li>
//     </ul>
//     <app-footer v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-footer>
//   </div>
// </template>

// <script>
// import Header from './components/Header.vue';
// import Footer from './components/Footer.vue';
// import Ninjas from './components/Ninjas.vue';
// export default {
//   components: {
//     'app-header': Header,
//     'app-footer': Footer,
//     'app-ninjas': Ninjas
//   },
//   data () {
//     return {
//     ninjas: [
//         {name: 'Ryu', speciality: 'Vue Components', show: false},
//         {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
//         {name: 'Hitoshi', speciality: 'Click Events', show: false},
//         {name: 'Tango', speciality: 'Conditionals', show: false},
//         {name: 'Kami', speciality: 'Webpack', show: false},
//         {name: 'Yoshi', speciality: 'Data Diggin', show: false}
//       ],
//       title: 'Vue Wizards'
//     }
//   },
//   methods: {
//     updateTitle: function(updatedTitle){
//       this.title = updatedTitle;
//     }
//   }
// }
// </script>

// HEADER.VUE
// <template>
//     <header>
//       <h1 v-on:click="changeTitle">{{ title }}</h1>
//     </header>
// </template>
// <script>
// export default {
//   props: {
//     title: {
//       type: String,
//       required: true
//     }
//   },
//   data(){
//     return{
//     }
//   },
//   methods: {
//     changeTitle: function(){
//       this.$emit('changeTitle', 'Vue Ninjas');
//       the first argument in $emit is the name of the event that $emit executes, the second is the data the the parent component is expecting. 
//     }
//   }
// } the <h1> has an onclick, once clicked it triggers a function. the function then emits ($emit) a signal to the parent. $emit also carrys with it an argument, which the parent is expecting. the parent uses that argument to update it's own title, which in turn updates the title that other child components (v-bind) are using. how does the parent listen to the $emit? with the follwing: 
// v-on:changeTitle="updateTitle($event)..the v-on allows the parent to listen, ChageTitle is what the parent is listening to..and updateTitle is the function to be executed along with the parameter. 
// </script>

//  -->

// <!-- Lesson 25 - The Event Bus
// Allows communication btw two child, sibling or unrelated components, without the need of a parent component. The event bus must first be created in the main.js file and also be able to be 'exported' 

// MAIN.JS
// import Vue from 'vue'
// import App from './App.vue'

// export const bus = new Vue();

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// The bus must be imported by both or all of the components after being created in main.js.
// The header $emits a signal with the event bus 
// HEADER.VUE
// <template>
//   <header>
//     <h1 v-on:click="changeTitle">{{ title }}</h1>
//   </header>
// </template>

// <script>
// import { bus } from '../main';

// export default {
//   props: {
//     title: {
//       type: String,
//       required: true
//     }
//   },
//   data(){
//     return{
//     }
//   },
//   methods: {
//     changeTitle: function(){
//       // this.$emit('changeTitle', 'Vue Ninjas');
//       this.title = 'Vue Ninjas';
//       bus.$emit('titleChanged', 'Vue Ninjas');
//       now you are not emitting the signal on the component, but on the 'bus'
//     }
//   }
// }
// </script>

// The bus must be imported by both or all of the components after being created in main.js. 
// The footer listens for the $emit signal
// FOOTER.VUE
// <template>
//   <footer>
//     <p>Copyright 2017 {{ title }}</p>
//   </footer>
// </template>

// <script>
// import { bus } from '../main';

// export default {
//   props: {
//     title: {
//       type: String,
//       required: true
//     }
//   },
//   data(){
//     return{
//     }
//   },
//   created(){ this is fat arrow syntax
//     bus.$on('titleChanged', (data) => {
//       this.title = data;
//     });
//   }
// }
// </script>
// -->

// <!-- Lesson 26 - Life Cycle Hooks

//   These are methods that can be used after a 'new Vue()' instance is created. Different functions can be executed here. 

//   HERE DATA IN THE DATA HASH IS AVAILABLE FOR USE. the data and events have not been created. Plus nothing is seen on the screen, cause the DOM has not been mounted (HMTL and CSS have not been applied to the page)

// beforeCreate(){
//     alert('beforeCreate');
// },

//   Here data and events are created cause the component is created. Plus nothing is seen on the screen, cause the DOM has not been mounted (HMTL and CSS has not been applied to the page)
//   Good place/time to make api calls. 

// created(){
//     alert('created');
// },

//   Here the DOM has not been mounted in the browser. this is rarely used. Plus nothing is seen on the screen, cause the DOM has not been mounted (HMTL and CSS has not been applied to the page)

// beforeMount(){
//     alert('beforeMount');
// },

//   DOM has been mounted. We have access to the code in the DOM. We can see the HTML and CSS on the screen. 

// mounted(){
//     alert('mounted');
// },

//   Data can be altered before the DOM is updated. Meaning the webpage being viewed is not updated with the change..any of the CRUD changes. 

// beforeUpdate(){
//     alert('beforeUpdate');
// },

//   Once the DOM has been updated. Meaning the webpage being viewed is updated with the change from any of the CRUD actions.

// updated(){
//     alert('updated');
// }

//   There is also a beforeDestroy() and destroyed() life cycle hooks. 
//  -->

// <!-- Lesson 27 - Slots 
//   These are used to pass entire HTML templates to child nodes. The HTML template structure goes in-btw <form-helper> tags. formhelper.vue is a skeleton for a form. it is created and imported and then registered and then used in App.vue...if you want to add additional features to formhelper.vue, you can do so by 'slots.' in App.vue, you create the slots and then in formhelper.vue you access the slots by name. this doesn't permanently alter formhelper.vue, but with slots, you can additional features and functionality on a case by case basis. 

// APP.VUE
// <template>
//   <div>
//     <form-helper>
//       <div slot="form-header"> to name your slot use: slot=''..then in the component that the slot is to be used, the specific slot can be called upon...see the slots being accessed by their name in formhelper.vue 
//         <h3>This is the title of a form</h3>
//         <p>This is some info about the form</p>
//       </div>
//       <div slot="form-fields">
//         <input type="text" placeholder="name" required />
//         <input type="password" placeholder="password" required />
//       </div>
//       <div slot="form-controls">
//         <button v-on:click="handleSubmit">Submit</button>
//       </div>
//     </form-helper>
//   </div>
// </template>

// <script>
// import formHelper from './components/formHelper.vue'

// export default {
//   components: {
//     'form-helper': formHelper
//   },
//   data () {
//     return {
//     }
//   },
//   methods: {
//     handleSubmit: function(){
//       alert('thanks for submitting');
//     }
//   }
// }
// </script>

// FORMHELPER.VUE
//   The <slot> tags are needed to tell VUE where to place HTML templates that are passed down from the parent component. 

// <template>
//   <div>
//   <h1>Please fill out our form...</h1>
//     <form>
//       <div id="form-header">
//         <slot name="form-header"></slot>
//       </div>
//       <div id="form-fields">
//         <slot name="form-fields"></slot>
//       </div>
//       <div id="form-controls">
//         <slot name="form-controls"></slot>
//       </div>
//       <div id="useful-links">
//         <ul>
//           <li><a href="#">link 1</a></li>
//           <li><a href="#">link 2</a></li>
//           <li><a href="#">link 3</a></li>
//           <li><a href="#">link 4</a></li>
//         </ul>
//         </div>
//     </form>
//   </div>
// </template>

// <script>
// export default {
//   components: {
//   },
//   data () {
//     return {
//     }
//   },
//   methods: {
//   }
// }
// </script>
//  -->

// <!-- Lesson 28 - Dynamic Components..to dynamically change which component is displayed, the component tag is needed

// APP.VUE
// <template>
//   <div>
//     <keep-alive> this is to keep the data within the fields when a user returns to the page
//       <component v-bind:is="component"></component>
//     </keep-alive>
//     <button v-on:click="component = 'form-one'">Show form one</button> THIS IS TO DYNAMICALLY DISPLAY A COMPONENT
//     <button v-on:click="component = 'form-two'">Show form two</button> THIS IS TO DYNAMICALLY DISPLAY A COMPONENT
//   </div>
// </template>

// <script>
// import formOne from './components/formOne.vue';
// import formTwo from './components/formTwo.vue';
// export default {
//   components: {
//     'form-one': formOne,
//     'form-two': formTwo
//   },
//   data () {
//     return {
//       component: 'form-one' WHEN THIS IS DYNAMICALLY CHANGED VIA THE ABOVE BUTTON, THE <component> TAG ABOVE IS ALSO CHANGED. THE <component> tag is v-bind to to this component property. 
//     }
//   },
//   methods: {
//     handleSubmit: function(){
//       alert('thanks for submitting');
//     }
//   }
// }
// </script>

// FORM ONE
// <template>
//   <div>
//     <form-helper>
//       <div slot="form-header">
//         <h3>Form One - Contact Us</h3>
//         <p>Fill in this form to contact us</p>
//       </div>
//       <div slot="form-fields">
//         <input type="text" placeholder="name" required />
//         <label>Your Message:</label>
//         <textarea></textarea>
//       </div>
//       <div slot="form-controls">
//         <button v-on:click="handleSubmit">Send</button>
//       </div>
//     </form-helper>
//   </div>
// </template>

// <script>
// import formHelper from './formHelper.vue'
// export default {
//   components: {
//     'form-helper': formHelper
//   },
//   data () {
//     return {
//     }
//   },
//   methods: {
//     handleSubmit: function(){
//       alert('thanks for submitting form one & contacting us');
//     }
//   }
// }
// </script>

// FORM TWO
// <template>
//   <div>
//     <form-helper>
//       <div slot="form-header">
//         <h3>Form Two - Log In</h3>
//         <p>Enter your details to log-in</p>
//       </div>
//       <div slot="form-fields">
//         <input type="text" placeholder="username" required />
//         <input type="password" placeholder="password" required />
//       </div>
//       <div slot="form-controls">
//         <button v-on:click="handleSubmit">Login</button>
//       </div>
//     </form-helper>
//   </div>
// </template>

// <script>
// import formHelper from './formHelper.vue'
// export default {
//   components: {
//     'form-helper': formHelper
//   },
//   data () {
//     return {
//     }
//   },
//   methods: {
//     handleSubmit: function(){
//       alert('thanks for logging in (form two)');
//     }
//   }
// }
// </script>
// -->

// <!-- Lesson 29 - Input Binding...introducing the v-model directive

// APP.VUE
// <template>
//   <div>
//     <add-blog></add-blog>
//   </div>
// </template>

// <script>
// import addBlog from './components/addBlog.vue';

// export default {
//   components: {
//     'add-blog': addBlog
//   },
//   data () {
//     return {
//     }
//   },
//   methods: {
//   }
// }
// </script>

// ADD BLOG
// <template>
//   <div id="add-blog">
//     <h2>Add a New Blog Post</h2>
//     <form>
//       <label>Blog Title:</label>
//       <input type="text" v-model.lazy="blog.title" required />  .lazy will populate it's field after hit 'tab' button
//       <label>Blog Content:</label>
//       <textarea v-model.lazy.trim="blog.content"></textarea>
//     </form>
//     <div id="preview">
//       <h3>Preview blog</h3>
//       <p>Blog title: {{ blog.title }}</p>
//       <p>Blog content:</p>
//       <p style="white-space: pre">{{ blog.content }}</p>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   data () {
//     return {
//       blog: {
//         title: '',
//         content: ''
//       }
//     }
//   },
//   methods: {
//   }
// }
// </script>
// -->

// <!-- Lesson 30 - Checkbox Binding Forms
//      Lesson 31 - Select Box Binding

// <template>
//   <div id="add-blog">
//     <h2>Add a New Blog Post</h2>
//     <form>
//       <label>Blog Title:</label>
//       <input type="text" v-model.lazy="blog.title" required />
//       <label>Blog Content:</label>
//       <textarea v-model.lazy.trim="blog.content"></textarea>
//       <div id="checkboxes">
//         <p>Blog Categories:</p>whichever checkbox is selected, the value of it will be pushed into blog.categories and then a loop will be executed cause it is an array. then displayed down below.
//         <label>Ninjas</label>
//         <input type="checkbox" value="ninjas" v-model="blog.categories" />
//         <label>Wizards</label>
//         <input type="checkbox" value="wizards" v-model="blog.categories" />
//         <label>Mario</label>
//         <input type="checkbox" value="mario" v-model="blog.categories" />
//         <label>Cheese</label>
//         <input type="checkbox" value="cheese" v-model="blog.categories" />
//       </div>
//       <label>Author:</label>
//        <select v-model="blog.author">
//           THE V-MODEL GOES TO THE SELECT TAG CAUSE ONCE A VALUE IS SELECTED FROM THE OPTION TAG, THE SELECT MODEL    HOLDS THE OPTION SELECTED
//           <option v-for="author in authors">{{ author }}</option>
//        </select>
//     </form>
//     <div id="preview">
//       <h3>Preview blog</h3>
//       <p>Blog title: {{ blog.title }}</p>
//       <p>Blog content:</p>
//       <p style="white-space: pre">{{ blog.content }}</p>
//       <p>Blog Categories:</p>
//       <ul>
//         <li v-for="category in blog.categories">{{ category }}</li>
//       </ul>
//       <p>Author: {{ blog.author }}</p>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   data () {
//     return {
//       blog: {
//         title: '',
//         content: '',
//         categories: [],
//         author: ''
//       },
//       authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator']
//     }
//   },
//   methods: {
//   }
// }
// </script>
// -->

// <!-- Lesson 32 - HTTP Requests
//      Lesson 33 - Making GET Requests

// -when installing in the terminal, use '--' to save it to the dependencies. 
// -to use a plugin, after downloading it, in the main.js file type Vue.use(VueResource)
// -remember data.body.slice(0,10) makes a copy of the first 10 elements in the array 
//  -->

// <!-- Lesson 34 - Custom Directives
// Directives: v-if, v-on, v-for..these are added to html elements as attributes. 
// Creating a Custom directives..the second parameter is the object...'bind' is a life cycle hook and takes three parameters...'el' refers to the html element that the directive is attached to, in this case <h2>...binding is the property after the equal sign..this is called "value"..seen line 1039, example: v-rainbow="XXXXX"..so the "XXXX" are 'value'

// GLOBALLY CREATING A FILTER. can be done in main.js

// MAIN.JS

// import Vue from 'vue'
// import VueResource from 'vue-resource'
// import App from './App.vue'

// // Use vue-resource package
// Vue.use(VueResource); 

// Vue.directive('rainbow', { 
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//     .0983749506984 is turned into a string..then the 6 digit number is taken, which is added to the "#"..which is also a string...that then equals a hash sequence color. 
//   }
// });

// Vue.directive('theme', {
//   bind(el, binding, vnode){
//     if (binding.value == 'wide'){
//       el.style.maxWidth = "1260px";
//     } else if (binding.value = 'narrow'){
//       el.style.maxWidth = "560px";
//     }
//     if(binding.arg == 'column'){
//       el.style.background = '#ddd';
//       el.style.padding = '20px';
//     }
//   }
// });

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// SHOWBLOGS.VUE
// v-theme and v-rainbow are directives that are created. they did not come with VUE...IMPORTANT TO NOTE THAT 'NARROW' OR 'WIDE' (THE VALUE FOR LINE 1061) IS IN SINGLE QUOTATIONS..IF NOT, THEN VUE THINKS IT IS A PROPERTY FROM THE DATA HASH METHOD. THE SINGLE QUOTES TELLS VUE IT IS A STRING

// after the (theme:) on line 1061...that is called an argument..custom arguments can be created also. see line 1043. 

// <template>
//   <div v-theme:column="'narrow'" id="show-blogs">
//     <h1>All Blog Articles</h1>
//     <div v-for="blog in blogs" class="single-blog">
//       <h2 v-rainbow>{{ blog.title }}</h2>
//       <article>{{ blog.body }}</article>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   data () {
//     return {
//       blogs: []
//     }
//   },
//   methods: {
//   },
//   created() {
//     this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
//       this.blogs = data.body.slice(0,10);
//     });
//   }
// }
// </script>
// -->

// <!-- Lesson 35 - Filters

// can be used to changed the data that is output to the browser. it is doesnt change the data that is stored in the original element, like the data in an array..only changes the data that is output to the screen. 

// MAIN.JS

// import Vue from 'vue'
// import VueResource from 'vue-resource'
// import App from './App.vue'

// // Use vue-resource package
// Vue.use(VueResource);

// // Filters
// THE VALUE IS THE DATA THAT THE FILTER IS BEING CALLED UPON..IN THIS CASE, BLOG.TITLE. 

// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });

// Vue.filter('snippet', function(value){
//   return value.slice(0, 100) + "..."
// });

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// SHOWBLOGS.VUE

// the filter is being called on line 1126. 

// <template>
//   <div id="show-blogs">
//     <h1>All Blog Articles</h1>
//     <div v-for="blog in blogs" class="single-blog">
//       <h2>{{ blog.title | to-uppercase }}</h2>
//       <article>{{ blog.body | snippet }}</article>
//     </div>
//   </div>
// </template>

// <script>
// -->

// <!-- Lesson 36 - Custom Search Box

// <template>
//   <div id="show-blogs">
//     <h1>All Blog Articles</h1>
//     <input type="text" v-model="search" placeholder="search blogs" />
//     <div v-for="blog in filteredBlogs" class="single-blog">
//       <h2>{{ blog.title | to-uppercase }}</h2>
//       <article>{{ blog.body }}</article>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   data () {
//     return {
//       blogs: [],
//       search: ''
//   }
// },
// methods: {
// },
// created() {
//   this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
//       this.blogs = data.body.slice(0,10);
//   });
// },
// computed: {
//   filteredBlogs: function(){
//       return this.blogs.filter((blog) => {
//         return blog.title.match(this.search);
//       });
//     }
//   }
// }
// </script>
//  -->

// <!-- Lesson 37 Register Globally vs Locally

// To register a filter or directive globally, they must be in the main.js file and type Vue.filter or Vue.directive. they can be used in any component now. 

// To register a filter or directive locally, it should be in the file and not the main.js file. View the blogs file below to see the syntax for local registration. 


// MAIN.JS

// import Vue from 'vue'
// import VueResource from 'vue-resource'
// import App from './App.vue'

// // Use vue-resource package
// Vue.use(VueResource);

// // Filters
// /*
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// }); */

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });


// SHOWBLOGS.VUE

// <template>
//   <div id="show-blogs">
//     <h1>All Blog Articles</h1>
//     <input type="text" v-model="search" placeholder="search blogs" />
//     <div v-for="blog in filteredBlogs" class="single-blog">
//       <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
//       <article>{{ blog.body }}</article>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   data () {
//     return {
//       blogs: [],
//       search: ''
//     }
//   },
//   methods: {
//   },
//   created() {
//     this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
//       this.blogs = data.body.slice(0,10);
//     });
//   },
//   computed: {
//     filteredBlogs: function(){
//       return this.blogs.filter((blog) => {
//         return blog.title.match(this.search);
//       });
//     }
//   },
//   filters: {
//     /*'to-uppercase': function(value){
//       return value.toUpperCase();
//     }*/
//     toUppercase(value){
//       return value.toUpperCase();
//     }
//   },
//   directives: {
//     'rainbow' :{
//       bind(el, binding, vnode){
//         el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//       }
//     }
//   }
// }
// </script>
//  -->

// <!-- Lesson 38 - Mixins

//   Similar to creating a component and reusing the component over and over again, a mixin is a chunk of code that can be re-used over and over again. 

// Created the mixin and IMPORTANT to make sure it is EXPORT DEFAULT cause this mixin will be exported to a component.

// SEARCHMIXIN.JS 

// export default {
//   computed: {
//     filteredBlogs: function(){
//       return this.blogs.filter((blog) => {
//         return blog.title.match(this.search);
//       });
//     }
//   }
// };

// LISTBLOG.VUE 

// The mixin will be imported into this component. The mixin also needs to be registered ..line 1297. 

// <template>
//   <div id="show-blogs">
//     <h1>List Blog Titles</h1>
//     <input type="text" v-model="search" placeholder="search blogs" />
//     <div v-for="blog in filteredBlogs" class="single-blog">
//       <h2>{{ blog.title }}</h2>
//     </div>
//   </div>
// </template>

// <script>
// import searchMixin from '../mixins/searchMixin';

// export default {
//   data () {
//     return {
//       blogs: [],
//       search: ''
//     }
//   },
//   mixins: [searchMixin]
// }
// </script>
//  -->

// beforeRouteLeave(to, from, next) {
//   const answer = window.confirm("Are you sure you want to leave?")

//   if (answer) {
//     next()
//   } else {
//     next(false)
//   }
// }
  // beforeRouteEnter(to, from, next) {
  //   const loggedInUser = true

  //   if (loggedInUser) {
  //     next()
  //   } else {
  //     next('/')
  //   }
  // }
// <!-- </div> -->
