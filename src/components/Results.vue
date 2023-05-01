<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 text-center">
        <h1>Python Quiz Results</h1>
      </div>
    </div>

    <div class="row justify-content-center mt-4 animate__animated animate__fadeIn">
      <div class="col-12 col-md-8">
        <div v-for="(res, index) in resOutput" :key="index">
          <h3 class="text-center mt-3 quest">Question {{index + 1}}: {{res.question}}</h3>
          <div class="resOutput">
            <p class="answer" >Answer: {{ res.answer }}</p>
            <p :class="{ 'correct': res.status === 'Correct', 'incorrect': res.status !== 'Correct' }">{{ res.status }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="reset">
        <button @click="refreshWindow" class="mt-5 btn btn-primary" >New Quiz<i class="pi pi-refresh
     ml-2"></i></button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        props: {submittedOutput: Array, questions: Array},
        setup(props) {
            //Destructuring Parent Props
            const { submittedOutput, questions } = props;
            const answers = ["cat", "7", "0 1 2 3", "2 4 6 8 10", "bearmarket", "2 4", "1 3 5 7 9", "True", "False", "6 7 8 9 10" ]

            const resOutput = ref([]);

            // Function to check if submitted output answer contains the correct answer
            const checkAnswer = (submission) => {
                //Use this to be more precise and cross link answers to questions in parent
                //const index = submission.questionIndex;

                //Data filtering unwanted spaces
                const submittedAnswer = submission.answer


                // Check if submitted answer matches any of the correct answers
                for (let i = 0; i < answers.length; i++) {
                    const answer = answers[i]
                    if (submittedAnswer.includes(answer)) {
                        return "Correct";
                    }
                }

                return "Incorrect";
            };


            // Add res output the question, answer and if correct or incorrect
            for (let i = 0; i < submittedOutput.length; i++) {
                const submission = submittedOutput[i];
                const question = questions[submission.questionIndex];
                const answer = submission.answer;
                const status = checkAnswer(submission);
                const result = { question, answer, status };
                resOutput.value.push(result);
            }


            //Function to refresh the window
            const refreshWindow = () => {
                window.location.reload();
            };
            

            return {submittedOutput, questions, resOutput, refreshWindow};
        }
    }
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  margin-top: 20px !important; 
}

.content h1 {
    justify-content: center;
}

.resOutput {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 5px orange;
  border-radius: 5px;
  text-align: center;
  height: auto;
  margin: 0;
  font-weight: 600;
}


.resOutput > * {
    flex-grow: 1;
    padding: 1rem;
}


.answer {
    background: #333;
    color: white;
    margin-bottom: 0px !important;

}

.correct {
    background: rgb(0, 180, 0);
    color: white;
    margin-bottom: 0px !important;
}

.incorrect {
    background: rgb(207, 0, 0);
    color: white;
    margin-bottom: 0px !important;
}

.reset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (max-width: 767px) {
  .quest {
    font-size: 1.3em;
  }
}
</style>