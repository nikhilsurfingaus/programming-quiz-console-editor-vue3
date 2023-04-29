<template>
  <div class="container d-flex justify-content-center flex-column align-items-center" v-if="!dispResults" >
    <h1>Start Python Quiz</h1>
    <h3>{{questDisp}} {{question}}</h3>
    <div class="q-ide">
        <MonacoEditor
            theme="vs"
            :options="options"
            language="typscript"
            :diffEditor="false"
            v-model:value="value"
            width="100%"
            height="100%"
        ></MonacoEditor>
    </div>
    <div class="output">
        <p class="compile" >{{compilation}}</p>
    </div>
    <button @click="sendCode" class="submit mt-4 btn btn-success" >Test Code <i class="pi pi-code
     ml-2"></i></button>
    <button @click="handleSubmit" class="submit mt-4 btn btn-primary "  :disabled="!showSubmit" >Submit<i class="pi pi-sign-in ml-2"></i></button>
  </div>
  <!-- Show result component here -->
  <div v-if="dispResults" >
    <Results :submittedOutput="submittedOutput" :questions="questions" />
  </div>
</template>

<script>
import MonacoEditor  from "monaco-editor-vue3";
import { ref } from 'vue';
import Results from './Results.vue';

export default {
 components: {
    MonacoEditor, Results
  },
  setup() {

    //Show Results Component IFF Submited All 5 Questions
    const dispResults = ref(false)

    const questionData = ["Print a the word cat to the console" , "Print the integer 7 to the console", "Using a for loop print 4 numbers from 0 to 3", "Print every even number from 1 to 10", "Concatnate the strings bear and market", "Print every even number from 1 to 5", "Print every odd number from 1 to 10", "Print a true output", "Print a false output", "Print 5 numbers from 6 to 10"]

    //Pick 5 Random Questions From The Question Bank
    const questions = ref([]);
    while (questions.value.length < 5) {
        const randomIndex = Math.floor(Math.random() * questionData.length);
        const randomQuestion = questionData[randomIndex];
        if (!questions.value.includes(randomQuestion)) {
            questions.value.push(randomQuestion);
        }
    }

    //Can only submit after testing code compiled
    const showSubmit = ref(false)

    const questDisp = ref('Q1: ')
    
    let index = ref(0)
    let question = ref(questions.value[index.value])
    
    const options = ref( {
        fontSize: 16,
    })

    const value = ref('')

    const compilation = ref('Output...')

    //Object Array of Questions and Index
    const submittedOutput = ref([])


    const handleTest = () => {
        console.log(value.value)
        compilation.value = 'Code Compiling...'
    }

  const sendCode = async () => {
    showSubmit.value = false
    console.log(value.value);
    compilation.value = 'Sending Code...';
    const response = await fetch('/api/v1/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            clientId: '800ee1b291200fc2c401e3e042b4856d',
            clientSecret: '2243c75fb0ccd0798e25822bf773ccb48dbe34aba25d71afe27b22a92f43cd5',
            script: value.value,
            language: 'python3',
            versionIndex: "0"
        }),
    });

    const data = await response.json();
    console.log(data);
    compilation.value = data.output;
    showSubmit.value = true
  };


  const handleSubmit = () => {
    const answer = compilation.value;
    const questionIndex = index.value;
    submittedOutput.value.push({ answer, questionIndex });
    index.value++;
    questDisp.value = `Q${index.value + 1}: `;
    question.value = questions.value[index.value];
    value.value = "";
    compilation.value = "";
    console.log(submittedOutput.value); // Log final output array
    showSubmit.value = false
    if (index.value > 4) {
      question.value = "QUIZ OVER";
      questDisp.value = "";
      console.log(submittedOutput.value);  // Log final output array
      //Show Results Component 
      dispResults.value = true
      return;
    }
  };



    return {options, value, handleTest, 
    compilation, sendCode, question, handleSubmit, 
    questDisp, showSubmit, dispResults, submittedOutput, questions};
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  height: 100%;
  margin-top: 20px !important; 
}

.q-ide {
  margin-top: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  width: 80%;
  height: 40vh;
  border: solid 5px orange;
}

.output {
  margin-top: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  width: 80%;
  height: 10vh;
  border: solid 5px orange;
}

.output p {
  opacity: 0.6;
  margin-left: 5px;
}

.submit {
    cursor: pointer;
}
</style>