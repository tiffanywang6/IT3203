<script>
  function checkAnswers(){
    let score = 0;
    let output = "";
    const quiz = document.getElementById('quiz-form');
    
    const q1 = quiz.querySelector('input[name="q1"]:checked');
    if(q1 && q1.value === "c"){
      score++;
    }
    else{
      output += "1. Correct Answer: Tim Berners-Lee<br>";
    }

    let q2selected = [];
    const q2options = quiz.querySelectorAll('input[name="q2"]:checked');
    for(let i=0; i<q2options.length; i++){
      q2selected.push(q2options[i].value);
    }
    const q2answer = ["HTML", "URL", "HTTP"];
    if(arraysMatch(q2answer, q2selected)){
      score++;
    }
    else{
      output += "2. Correct Answer: HTML, URL, HTTP<br>";
    }
    
    const q3 = quiz.querySelector('input[name="q3"]:checked');
    if(q3 && q3.value === "b"){
      score++;
    }
    else{
      output += "3. Correct Answer: Microsoft Excel<br>";
    }

    const q4 = quiz.querySelector('input[name="q4"]:checked');
    if(q4 && q4.value === "d"){
      score++;
    }
    else{
      output += "4. Correct Answer: CSS<br>";
    }

    const q5 = quiz.querySelector('input[name="q5"]').value.trim().toLowerCase();
    if(q5 === "hypertext markup language"){
      score++;
    }
    else{
      output += "5. Correct Answer: HyperText Markup Language<br>";
    }

    let q6selected = [];
    const q6options = quiz.querySelectorAll('input[name="q6"]:checked');
    for(let i=0; i<q6options.length; i++){
      q6selected.push(q6options[i].value);
    }
    const q6answer = ["HTTP/HTTPS", "File Paths", "Domain Name"];
    if(arraysMatch(q6answer, q6selected)){
      score++;
    }
    else{
      output += "6. Correct Answer: HTTP/HTTPS, File Paths, Domain Name<br>";
    }

    const q7 = quiz.querySelector('input[name="q7"]').value.trim().toLowerCase();
    if(q7 === "uniform resource locator"){
      score++;
    }
    else{
      output += "7. Correct Answer: Uniform Resource Locator<br>";
    }

    const q8 = quiz.querySelector('input[name="q8"]:checked');
    if(q8 && q8.value == "a"){
      score++;
    }
    else{
      output += "8. Correct Answer: www.kennesaw.edu<br>";
    }

    const q9 = quiz.querySelector('input[name="q9"]:checked');
    if(q9 && q9.value == "a"){
      score++;
    }
    else{
      output += "9. Correct Answer: To connect web pages<br>";
    }

    const q10 = quiz.querySelector('input[name="q10"]').value.trim().toLowerCase();
    if(q10 === "hypertext transfer protocol"){
      score++;
    }
    else{
      output += "10. Correct Answer: HyperText Transfer Protocol<br>";
    }
    output += "<strong>Results:" + score + " out of 10</strong><br>";
    document.getElementById('results').innerHTML = output;
  }
  
  function arraysMatch(correct, selected){
    if(correct.length !== selected.length){
      return false;
    }
    for(let i=0; i<correct.length; i++){
      if(!selected.includes(correct[i])){
        return false;
      }
    }
    return true;
  }
  
  function resetQuiz(){
    document.getElementById('quiz-form').reset();
    document.getElementById('results').innerHTML = "";
  }
</script>
